const ORDER_KEY = 'quiz_question_order_dhct_v1';
const ANSWERS_KEY = 'quiz_user_answers_dhct_v1';
const QUESTIONS_PER_PAGE = 20;

const ICON_CHECK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
const ICON_X = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
const ICON_FLAME = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3c1.5 3 4 4.5 4 8a4 4 0 0 1-8 0c0-1.5.5-2.5 1.5-3.5C9 9 9 6 12 3Z"/><path d="M12 21a5 5 0 0 0 5-5c0-2-1-3.5-2.5-5"/></svg>';

const card = document.getElementById('question-card');
const currentNum = document.getElementById('current-num');
const totalNum = document.getElementById('total-num');
const progressFill = document.getElementById('progress-fill');
const progressTrack = document.querySelector('.progress-track');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const sheetBtn = document.getElementById('sheet-btn');
const sheet = document.getElementById('question-sheet');
const sheetBackdrop = document.getElementById('sheet-backdrop');
const sheetClose = document.getElementById('sheet-close');
const sheetGrid = document.getElementById('sheet-grid');
const desktopGrid = document.getElementById('desktop-grid');
const resetBtn = document.getElementById('reset-btn');
const resetInlineBtn = document.getElementById('reset-inline-btn');
const resetTopBtn = document.getElementById('reset-top-btn');
const resetDialog = document.getElementById('reset-dialog');
const resetBackdrop = document.getElementById('reset-dialog-backdrop');
const resetCancel = document.getElementById('reset-cancel');
const resetConfirm = document.getElementById('reset-confirm');
const liveRegion = document.getElementById('live-region');

const ids = quizData.map(q => q.id);
const byId = new Map(quizData.map(q => [q.id, q]));

function readJson(key) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
}

function writeJson(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        // localStorage có thể bị chặn hoặc đầy; app vẫn chạy trong phiên.
    }
}

let questionOrder = QuizCore.normalizeOrder(readJson(ORDER_KEY), ids);
if (!questionOrder) {
    questionOrder = QuizCore.shuffledCopy(ids);
    writeJson(ORDER_KEY, questionOrder);
}

let userAnswers = QuizCore.normalizeAnswers(readJson(ANSWERS_KEY), ids);
let currentPage = 1;
let streak = 0;
let lastFocused = null;
let lastResetTrigger = null;
const resetButtons = [resetBtn, resetInlineBtn, resetTopBtn].filter(Boolean);

const optionCache = new Map();
let reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
if (motionQuery.addEventListener) {
    motionQuery.addEventListener('change', event => {
        reduceMotion = event.matches;
    });
}

function totalPages() {
    return Math.max(1, Math.ceil(questionOrder.length / QUESTIONS_PER_PAGE));
}

function optionsFor(question) {
    if (!optionCache.has(question.id)) {
        optionCache.set(question.id, QuizCore.shuffleOptions(question));
    }
    return optionCache.get(question.id);
}

function updateAppBar() {
    const pages = totalPages();
    currentNum.textContent = String(currentPage);
    totalNum.textContent = String(pages);
    const percent = (currentPage / pages) * 100;
    progressFill.style.width = `${percent}%`;
    if (progressTrack) {
        progressTrack.setAttribute('aria-valuenow', String(currentPage));
        progressTrack.setAttribute('aria-valuemax', String(pages));
    }
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === pages;
}

function buildOptionButton(question, option, displayIndex, options, optionButtons, block) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option-btn';
    button.dataset.key = option.key;

    const letter = document.createElement('span');
    letter.className = 'letter';
    letter.textContent = String.fromCharCode(65 + displayIndex);

    const text = document.createElement('span');
    text.className = 'option-text';
    text.textContent = option.text;

    const icon = document.createElement('span');
    icon.className = 'option-icon';
    icon.setAttribute('aria-hidden', 'true');

    button.append(letter, text, icon);

    const selected = userAnswers[question.id];
    if (selected) {
        button.disabled = true;
        if (option.key === question.answer) {
            button.classList.add('is-correct');
            icon.innerHTML = ICON_CHECK;
        } else if (option.key === selected) {
            button.classList.add('is-wrong');
            icon.innerHTML = ICON_X;
        }
    } else {
        button.addEventListener('click', () => {
            selectOption(question, option, options, optionButtons, block);
        });
    }

    return button;
}

function renderPage() {
    const start = (currentPage - 1) * QUESTIONS_PER_PAGE;
    const end = Math.min(start + QUESTIONS_PER_PAGE, questionOrder.length);
    card.innerHTML = '';

    for (let index = start; index < end; index++) {
        const question = byId.get(questionOrder[index]);
        if (!question) continue;

        const options = optionsFor(question);
        const optionButtons = [];

        const block = document.createElement('article');
        block.className = 'question-card';
        block.dataset.index = String(index);
        block.id = `q-${index}`;
        block.tabIndex = -1;

        const label = document.createElement('div');
        label.className = 'question-label';
        label.textContent = `Câu ${index + 1}`;

        const heading = document.createElement('h2');
        heading.className = 'question-text';
        heading.textContent = question.question;

        const list = document.createElement('div');
        list.className = 'options';

        options.forEach((option, displayIndex) => {
            const button = buildOptionButton(question, option, displayIndex, options, optionButtons, block);
            optionButtons.push(button);
            list.appendChild(button);
        });

        block.append(label, heading, list);
        card.appendChild(block);
    }

    updateAppBar();
    renderGrids();
}

function displayLetter(options, originalKey) {
    return QuizCore.displayLetter(options, originalKey);
}

function selectOption(question, option, options, optionButtons, block) {
    if (userAnswers[question.id]) return;

    userAnswers[question.id] = option.key;
    writeJson(ANSWERS_KEY, userAnswers);

    const isCorrect = option.key === question.answer;
    const correctLetter = displayLetter(options, question.answer);

    optionButtons.forEach(button => {
        button.disabled = true;
        const icon = button.querySelector('.option-icon');
        if (button.dataset.key === question.answer) {
            button.classList.add('is-correct');
            if (icon) icon.innerHTML = ICON_CHECK;
        } else if (button.dataset.key === option.key) {
            button.classList.add('is-wrong');
            if (icon) icon.innerHTML = ICON_X;
        }
    });

    if (isCorrect) {
        streak += 1;
        liveRegion.textContent = `Đúng. Chuỗi ${streak} câu đúng.`;
        if (!reduceMotion) {
            showPaperBits(block);
            if (streak % 3 === 0) showStreak(block, streak);
        }
    } else {
        streak = 0;
        liveRegion.textContent = `Sai. Đáp án đúng là ${correctLetter}.`;
    }

    renderGrids();
}

function renderGrid(container) {
    if (!container) return;
    container.innerHTML = '';
    const start = (currentPage - 1) * QUESTIONS_PER_PAGE;
    const end = Math.min(start + QUESTIONS_PER_PAGE, questionOrder.length);

    questionOrder.forEach((id, index) => {
        const question = byId.get(id);
        const answer = userAnswers[id];
        const cell = document.createElement('button');
        cell.type = 'button';
        cell.className = 'sheet-cell';
        cell.textContent = String(index + 1);

        if (index >= start && index < end) {
            cell.classList.add('is-current');
            if (index === start) cell.setAttribute('aria-current', 'true');
        }
        if (answer) {
            if (answer === question.answer) {
                cell.classList.add('is-correct');
            } else {
                cell.classList.add('is-wrong');
            }
        }
        const state = answer ? (answer === question.answer ? ' đúng' : ' sai') : ' chưa làm';
        cell.setAttribute('aria-label', `Câu ${index + 1}${state}`);
        cell.addEventListener('click', () => goToQuestion(index));
        container.appendChild(cell);
    });
}

function renderGrids() {
    renderGrid(sheetGrid);
    renderGrid(desktopGrid);
}

function showPaperBits(block) {
    for (let index = 0; index < 6; index++) {
        const bit = document.createElement('span');
        bit.className = 'paper-bit';
        bit.style.setProperty('--dx', `${Math.round(Math.random() * 120 - 60)}px`);
        bit.style.setProperty('--dy', `${Math.round(-Math.random() * 70 - 20)}px`);
        bit.style.setProperty('--rot', `${Math.round(Math.random() * 360 - 180)}deg`);
        bit.style.background = index % 2 ? 'var(--teal)' : 'var(--amber-bright)';
        block.appendChild(bit);
        window.setTimeout(() => bit.remove(), 620);
    }
}

function showStreak(block, count) {
    const old = block.querySelector('.streak-chip');
    if (old) old.remove();

    const chip = document.createElement('div');
    chip.className = 'streak-chip';
    chip.innerHTML = `${ICON_FLAME}<span>${count} đúng liên tiếp</span>`;
    block.appendChild(chip);
    window.setTimeout(() => chip.remove(), 1600);
}

function scrollToQuestion(index) {
    const block = card.querySelector(`[data-index="${index}"]`);
    if (!block) return;
    block.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'center'
    });
    block.focus({ preventScroll: true });
}

function goToQuestion(index) {
    if (index < 0 || index >= questionOrder.length) return;
    const page = Math.floor(index / QUESTIONS_PER_PAGE) + 1;
    closeSheet();
    if (page !== currentPage) {
        currentPage = page;
        renderPage();
        window.setTimeout(() => scrollToQuestion(index), 60);
    } else {
        scrollToQuestion(index);
    }
}

function goToPage(page) {
    const pages = totalPages();
    if (page < 1 || page > pages || page === currentPage) return;
    currentPage = page;
    closeSheet();
    renderPage();
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
}

function openSheet() {
    lastFocused = document.activeElement;
    sheet.hidden = false;
    sheetBackdrop.hidden = false;
    document.body.classList.add('sheet-open');
    renderGrids();
    sheet.focus({ preventScroll: true });
}

function closeSheet() {
    if (sheet.hidden) return;
    sheet.hidden = true;
    sheetBackdrop.hidden = true;
    document.body.classList.remove('sheet-open');
    if (lastFocused && typeof lastFocused.focus === 'function') {
        lastFocused.focus();
    }
}

function openResetDialog(trigger) {
    lastResetTrigger = trigger || null;
    resetDialog.hidden = false;
    resetBackdrop.hidden = false;
    document.body.classList.add('dialog-open');
    resetDialog.focus({ preventScroll: true });
}

function closeResetDialog(returnFocus = true) {
    resetDialog.hidden = true;
    resetBackdrop.hidden = true;
    document.body.classList.remove('dialog-open');
    if (returnFocus && lastResetTrigger && typeof lastResetTrigger.focus === 'function') {
        lastResetTrigger.focus();
    }
    lastResetTrigger = null;
}

function confirmReset() {
    resetDialog.hidden = true;
    resetBackdrop.hidden = true;
    document.body.classList.remove('dialog-open');
    lastResetTrigger = null;
    doReset();
    if (resetTopBtn) resetTopBtn.focus({ preventScroll: true });
    else if (sheetBtn) sheetBtn.focus({ preventScroll: true });
}

function doReset() {
    userAnswers = {};
    writeJson(ANSWERS_KEY, userAnswers);

    questionOrder = QuizCore.shuffledCopy(ids);
    writeJson(ORDER_KEY, questionOrder);

    optionCache.clear();
    currentPage = 1;
    streak = 0;

    closeSheet();
    renderPage();
    liveRegion.textContent = 'Đã reset. Thứ tự câu đã được đảo.';
}

prevBtn.addEventListener('click', () => goToPage(currentPage - 1));
nextBtn.addEventListener('click', () => goToPage(currentPage + 1));
sheetBtn.addEventListener('click', openSheet);
sheetClose.addEventListener('click', closeSheet);
sheetBackdrop.addEventListener('click', closeSheet);
resetButtons.forEach(button => button.addEventListener('click', () => openResetDialog(button)));
resetCancel.addEventListener('click', () => closeResetDialog());
resetConfirm.addEventListener('click', confirmReset);
resetBackdrop.addEventListener('click', () => closeResetDialog());

document.addEventListener('keydown', event => {
    if (event.metaKey || event.ctrlKey || event.altKey) return;

    if (!resetDialog.hidden) {
        if (event.key === 'Escape') {
            event.preventDefault();
            closeResetDialog();
            return;
        }
        if (event.key === 'Tab') {
            const focusables = resetDialog.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
            if (!focusables.length) return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (document.activeElement === resetDialog) {
                if (event.shiftKey) {
                    event.preventDefault();
                    last.focus();
                }
                return;
            }
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
        return;
    }

    if (!sheet.hidden) {
        if (event.key === 'Escape') {
            event.preventDefault();
            closeSheet();
            return;
        }
        if (event.key === 'Tab') {
            const focusables = sheet.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
            if (!focusables.length) return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (document.activeElement === sheet) {
                if (event.shiftKey) {
                    event.preventDefault();
                    last.focus();
                }
                return;
            }
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
        return;
    }

    if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goToPage(currentPage - 1);
        return;
    }
    if (event.key === 'ArrowRight') {
        event.preventDefault();
        goToPage(currentPage + 1);
    }
});

renderPage();
