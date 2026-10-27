const ORDER_KEY = 'quiz_question_order_dls_v1';
const ANSWERS_KEY = 'quiz_user_answers_dls_v1';

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
let currentIndex = 0;
let streak = 0;
let resetArmed = false;
let resetTimer = null;
let lastFocused = null;

const optionCache = new Map();
let reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
if (motionQuery.addEventListener) {
    motionQuery.addEventListener('change', event => {
        reduceMotion = event.matches;
    });
}

function optionsFor(question) {
    if (!optionCache.has(question.id)) {
        optionCache.set(question.id, QuizCore.shuffleOptions(question));
    }
    return optionCache.get(question.id);
}

function updateAppBar() {
    currentNum.textContent = String(currentIndex + 1);
    totalNum.textContent = String(questionOrder.length);
    const percent = questionOrder.length ? ((currentIndex + 1) / questionOrder.length) * 100 : 0;
    progressFill.style.width = `${percent}%`;
    if (progressTrack) {
        progressTrack.setAttribute('aria-valuenow', String(currentIndex + 1));
        progressTrack.setAttribute('aria-valuemax', String(questionOrder.length));
    }
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === questionOrder.length - 1;
}

function buildOptionButton(question, option, displayIndex) {
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
    }

    return button;
}

function renderQuestion() {
    const question = byId.get(questionOrder[currentIndex]);
    if (!question) return;

    const options = optionsFor(question);
    const optionButtons = [];

    card.innerHTML = '';
    card.tabIndex = -1;

    const label = document.createElement('div');
    label.className = 'question-label';
    label.textContent = `Câu ${currentIndex + 1}`;

    const heading = document.createElement('h2');
    heading.className = 'question-text';
    heading.textContent = question.question;

    const list = document.createElement('div');
    list.className = 'options';

    options.forEach((option, index) => {
        const button = buildOptionButton(question, option, index);
        if (!userAnswers[question.id]) {
            button.addEventListener('click', () => {
                selectOption(question, option, options, optionButtons);
            });
        }
        optionButtons.push(button);
        list.appendChild(button);
    });

    card.append(label, heading, list);
    updateAppBar();
    renderGrids();
}

function displayLetter(options, originalKey) {
    return QuizCore.displayLetter(options, originalKey);
}

function selectOption(question, option, options, optionButtons) {
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
            showPaperBits();
            if (streak % 3 === 0) showStreak(streak);
        }
    } else {
        streak = 0;
        liveRegion.textContent = `Sai. Đáp án đúng là ${correctLetter}.`;
    }

    renderGrids();
}

function renderGrid(container) {
    container.innerHTML = '';
    questionOrder.forEach((id, index) => {
        const question = byId.get(id);
        const answer = userAnswers[id];
        const cell = document.createElement('button');
        cell.type = 'button';
        cell.className = 'sheet-cell';
        cell.textContent = String(index + 1);

        if (index === currentIndex) {
            cell.classList.add('is-current');
            cell.setAttribute('aria-current', 'true');
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
        cell.addEventListener('click', () => goTo(index));
        container.appendChild(cell);
    });
}

function renderGrids() {
    renderGrid(sheetGrid);
    renderGrid(desktopGrid);
}

function showPaperBits() {
    for (let index = 0; index < 6; index++) {
        const bit = document.createElement('span');
        bit.className = 'paper-bit';
        bit.style.setProperty('--dx', `${Math.round(Math.random() * 120 - 60)}px`);
        bit.style.setProperty('--dy', `${Math.round(-Math.random() * 70 - 20)}px`);
        bit.style.setProperty('--rot', `${Math.round(Math.random() * 360 - 180)}deg`);
        bit.style.background = index % 2 ? 'var(--teal)' : 'var(--amber-bright)';
        card.appendChild(bit);
        window.setTimeout(() => bit.remove(), 620);
    }
}

function showStreak(count) {
    const old = card.querySelector('.streak-chip');
    if (old) old.remove();

    const chip = document.createElement('div');
    chip.className = 'streak-chip';
    chip.innerHTML = `${ICON_FLAME}<span>${count} đúng liên tiếp</span>`;
    card.appendChild(chip);
    window.setTimeout(() => chip.remove(), 1600);
}

function goTo(index) {
    if (index < 0 || index >= questionOrder.length) return;
    currentIndex = index;
    closeSheet();
    renderQuestion();
    card.focus({ preventScroll: true });
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

function armReset() {
    if (resetArmed) {
        doReset();
        return;
    }
    resetArmed = true;
    resetBtn.classList.add('is-armed');
    resetBtn.textContent = 'Chắc chắn? Bấm lần nữa';
    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(() => {
        resetArmed = false;
        resetBtn.classList.remove('is-armed');
        resetBtn.textContent = 'Reset kết quả';
    }, 3000);
}

function doReset() {
    userAnswers = {};
    writeJson(ANSWERS_KEY, userAnswers);

    questionOrder = QuizCore.shuffledCopy(ids);
    writeJson(ORDER_KEY, questionOrder);

    optionCache.clear();
    currentIndex = 0;
    streak = 0;
    resetArmed = false;
    resetBtn.classList.remove('is-armed');
    resetBtn.textContent = 'Reset kết quả';

    closeSheet();
    renderQuestion();
    liveRegion.textContent = 'Đã reset. Thứ tự câu đã được đảo.';
}

prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
nextBtn.addEventListener('click', () => goTo(currentIndex + 1));
sheetBtn.addEventListener('click', openSheet);
sheetClose.addEventListener('click', closeSheet);
sheetBackdrop.addEventListener('click', closeSheet);
resetBtn.addEventListener('click', armReset);

document.addEventListener('keydown', event => {
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
        goTo(currentIndex - 1);
        return;
    }
    if (event.key === 'ArrowRight') {
        event.preventDefault();
        goTo(currentIndex + 1);
        return;
    }
    if (event.key >= '1' && event.key <= '4') {
        const question = byId.get(questionOrder[currentIndex]);
        if (!question || userAnswers[question.id]) return;
        const options = optionsFor(question);
        const index = Number(event.key) - 1;
        if (!options[index]) return;
        const buttons = card.querySelectorAll('.option-btn');
        if (buttons[index]) buttons[index].click();
    }
});

renderQuestion();
