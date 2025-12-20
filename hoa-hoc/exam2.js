const EXAM_QUESTION_COUNT = 40;
const QUESTIONS_PER_PAGE = 20;
const STORAGE_KEY = 'quiz_exam_answers2_v1';

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

const examIndexesKey = 'quiz_exam_indexes2_v1';
const shuffledOptionsKey = 'quiz_exam_shuffled_options2_v1';
localStorage.removeItem(examIndexesKey);
localStorage.removeItem(shuffledOptionsKey);
localStorage.removeItem(STORAGE_KEY);

function getExamIndexes() {
    let arr = Array.from({length: quizData.length}, (_, i) => i);
    shuffleArray(arr);
    arr = arr.slice(0, EXAM_QUESTION_COUNT);
    localStorage.setItem(examIndexesKey, JSON.stringify(arr));
    return arr;
}
const examIndexes = getExamIndexes();
const examQuizData = examIndexes.map(i => quizData[i]);

function getShuffledOptions() {
    const arr = examQuizData.map(q => {
        const options = [
            { key: 'A', value: q.option_a },
            { key: 'B', value: q.option_b },
            { key: 'C', value: q.option_c },
            { key: 'D', value: q.option_d }
        ];
        shuffleArray(options);
        const correctKey = options.find(opt => opt.key === q.answer);
        return {
            options,
            answer: String.fromCharCode(65 + options.indexOf(correctKey))
        };
    });
    localStorage.setItem(shuffledOptionsKey, JSON.stringify(arr));
    return arr;
}
const shuffledOptions = getShuffledOptions();

function loadUserAnswers() {
    return Array(EXAM_QUESTION_COUNT).fill(null);
}
function saveUserAnswers() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userAnswers));
}
function resetUserAnswers() {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(shuffledOptionsKey);
    userAnswers.fill(null);
    const newShuffledOptions = examQuizData.map(q => {
        const options = [
            { key: 'A', value: q.option_a },
            { key: 'B', value: q.option_b },
            { key: 'C', value: q.option_c },
            { key: 'D', value: q.option_d }
        ];
        shuffleArray(options);
        const correctKey = options.find(opt => opt.key === q.answer);
        return {
            options,
            answer: String.fromCharCode(65 + options.indexOf(correctKey))
        };
    });
    localStorage.setItem(shuffledOptionsKey, JSON.stringify(newShuffledOptions));
    Object.assign(shuffledOptions, newShuffledOptions);
    renderPage(currentPage);
}

const userAnswers = loadUserAnswers();

const container = document.getElementById('quiz-container');
const sidebar = document.getElementById('sidebar');
let currentPage = 1;
const totalPages = Math.ceil(EXAM_QUESTION_COUNT / QUESTIONS_PER_PAGE);

function renderSidebar(selectedPage) {
    sidebar.innerHTML = '';
    const title = document.createElement('h2');
    title.textContent = 'Câu hỏi';
    sidebar.appendChild(title);

    const sidebarWidth = sidebar.offsetWidth || 320;
    const cellWidth = 38;
    let COLS = Math.floor((sidebarWidth * 0.9) / cellWidth);
    if (COLS < 10) COLS = 10;
    if (COLS > 20) COLS = 20;
    const total = examQuizData.length;
    const ROWS = Math.ceil(total / COLS);

    const tableWrapper = document.createElement('div');
    tableWrapper.className = 'sidebar-table-wrapper';

    const table = document.createElement('table');
    table.className = 'sidebar-table';

    let correctCount = 0;
    for (let row = 0; row < ROWS; row++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < COLS; col++) {
            let idx = row + col * ROWS;
            if (idx < total) {
                let answer = userAnswers[idx];
                let td_num = document.createElement('td');
                td_num.textContent = idx + 1;
                let td_ans = document.createElement('td');
                td_ans.textContent = answer ? answer : '';
                if (answer) {
                    td_ans.classList.add('answered');
                    if (answer === shuffledOptions[idx].answer) {
                        td_ans.classList.add('correct');
                        correctCount++;
                    } else {
                        td_ans.classList.add('incorrect');
                    }
                }
                const start = (selectedPage - 1) * QUESTIONS_PER_PAGE;
                const end = Math.min(start + QUESTIONS_PER_PAGE, total);
                if (idx >= start && idx < end) {
                    td_num.classList.add('selected');
                    td_ans.classList.add('selected');
                    if (idx === start) {
                        setTimeout(() => {
                            const sidebarEl = document.getElementById('sidebar');
                            const firstSelectedRow = td_num.closest('tr');
                            if (sidebarEl && firstSelectedRow) {
                                const offsetTop = firstSelectedRow.offsetTop - sidebarEl.offsetTop;
                                sidebarEl.scrollTo({ top: offsetTop - 100, behavior: 'smooth' });
                            }
                        }, 100);
                    }
                }
                td_num.style.cursor = td_ans.style.cursor = 'pointer';
                td_num.onclick = td_ans.onclick = (e) => {
                    e.preventDefault();
                    const pageToGo = Math.ceil((idx + 1) / QUESTIONS_PER_PAGE);
                    const pageStart = (pageToGo - 1) * QUESTIONS_PER_PAGE;
                    const targetQuestionIdx = idx - pageStart;
                    
                    if (pageToGo !== currentPage) {
                        currentPage = pageToGo;
                        renderPage(currentPage);
                        setTimeout(() => {
                            const allQuestionBlocks = document.querySelectorAll('.question-block');
                            if (allQuestionBlocks[targetQuestionIdx]) {
                                allQuestionBlocks[targetQuestionIdx].scrollIntoView({ 
                                    behavior: 'smooth', 
                                    block: 'center' 
                                });
                            }
                        }, 100);
                    } else {
                        const allQuestionBlocks = document.querySelectorAll('.question-block');
                        if (allQuestionBlocks[targetQuestionIdx]) {
                            allQuestionBlocks[targetQuestionIdx].scrollIntoView({ 
                                behavior: 'smooth', 
                                block: 'center' 
                            });
                        }
                    }
                };
                tr.appendChild(td_num);
                tr.appendChild(td_ans);
            } else {
                tr.appendChild(document.createElement('td'));
                tr.appendChild(document.createElement('td'));
            }
        }
        table.appendChild(tr);
    }
    tableWrapper.appendChild(table);
    sidebar.appendChild(tableWrapper);

    const score = document.createElement('div');
    score.className = 'score';
    score.textContent = `Đúng: ${correctCount} / ${examQuizData.length}`;
    sidebar.appendChild(score);

    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset kết quả';
    resetBtn.className = 'reset-btn';
    resetBtn.style.margin = '16px auto 0 auto';
    resetBtn.style.display = 'block';
    resetBtn.onclick = resetUserAnswers;
    sidebar.appendChild(resetBtn);
}

function renderJumpToQuestion() {
    const nav = document.createElement('div');
    nav.style.display = 'flex';
    nav.style.justifyContent = 'center';
    nav.style.gap = '10px';
    nav.style.margin = '24px 0';
    nav.style.flexWrap = 'wrap';

    const indexInput = document.createElement('input');
    indexInput.type = 'number';
    indexInput.min = 1;
    indexInput.max = examQuizData.length;
    indexInput.placeholder = 'Câu #';
    indexInput.style.width = '70px';
    indexInput.style.fontSize = '1rem';
    indexInput.style.textAlign = 'center';
    indexInput.title = 'Nhập số thứ tự câu';

    const gotoIndexBtn = document.createElement('button');
    gotoIndexBtn.textContent = 'Tới câu';
    gotoIndexBtn.className = 'reset-btn';
    gotoIndexBtn.onclick = () => {
        let idx = parseInt(indexInput.value, 10);
        if (!isNaN(idx) && idx >= 1 && idx <= examQuizData.length) {
            const pageToGo = Math.ceil(idx / QUESTIONS_PER_PAGE);
            currentPage = pageToGo;
            renderPage(currentPage);
            window.scrollTo(0, 0);
        } else {
            indexInput.value = '';
        }
    };
    indexInput.onkeydown = (e) => {
        if (e.key === 'Enter') {
            gotoIndexBtn.onclick();
        }
    };

    nav.appendChild(indexInput);
    nav.appendChild(gotoIndexBtn);

    return nav;
}

function renderPagination(page) {
    const nav = document.createElement('div');
    nav.style.display = 'flex';
    nav.style.justifyContent = 'center';
    nav.style.gap = '10px';
    nav.style.margin = '24px 0';
    nav.style.flexWrap = 'wrap';

    const prevBtn = document.createElement('button');
    prevBtn.textContent = 'Trước';
    prevBtn.className = 'reset-btn';
    prevBtn.disabled = page === 1;
    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderPage(currentPage);
            window.scrollTo(0, 0);
        }
    };

    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Sau';
    nextBtn.className = 'reset-btn';
    nextBtn.disabled = page === totalPages;
    nextBtn.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderPage(currentPage);
            window.scrollTo(0, 0);
        }
    };

    const pageInfo = document.createElement('span');
    pageInfo.style.alignSelf = 'center';
    pageInfo.textContent = `Trang ${page} / ${totalPages}`;

    const pageInput = document.createElement('input');
    pageInput.type = 'number';
    pageInput.min = 1;
    pageInput.max = totalPages;
    pageInput.value = page;
    pageInput.style.width = '60px';
    pageInput.style.fontSize = '1rem';
    pageInput.style.textAlign = 'center';
    pageInput.title = 'Nhập số trang';

    const gotoBtn = document.createElement('button');
    gotoBtn.textContent = 'Đi';
    gotoBtn.className = 'reset-btn';
    gotoBtn.onclick = () => {
        let val = parseInt(pageInput.value, 10);
        if (!isNaN(val) && val >= 1 && val <= totalPages) {
            currentPage = val;
            renderPage(currentPage);
            window.scrollTo(0, 0);
        } else {
            pageInput.value = currentPage;
        }
    };
    pageInput.onkeydown = (e) => {
        if (e.key === 'Enter') {
            gotoBtn.onclick();
        }
    };

    nav.appendChild(prevBtn);
    nav.appendChild(pageInfo);
    nav.appendChild(pageInput);
    nav.appendChild(gotoBtn);
    nav.appendChild(nextBtn);

    return nav;
}

function showEffect(type, parent) {
    const old = parent.querySelector('.answer-effect');
    if (old) old.remove();

    const effect = document.createElement('span');
    effect.className = 'answer-effect';
    effect.style.position = 'absolute';
    effect.style.left = '50%';
    effect.style.top = '50%';
    effect.style.transform = 'translate(-50%, -50%) scale(1)';
    effect.style.pointerEvents = 'none';
    effect.style.fontSize = '3rem';
    effect.style.opacity = '1';
    effect.style.transition = 'transform 0.7s cubic-bezier(.17,.67,.83,.67), opacity 0.7s';
    effect.style.zIndex = '10';
    effect.textContent = type === 'heart' ? '💖' : '💩';
    parent.appendChild(effect);
    setTimeout(() => {
        effect.style.transform = 'translate(-50%, -50%) scale(2.5)';
        effect.style.opacity = '0';
    }, 10);
    setTimeout(() => {
        effect.remove();
    }, 800);

    if (type === 'heart') {
        createFloatingHearts();
    }
}

function createFloatingHearts() {
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = '💖';
            heart.style.position = 'fixed';
            heart.style.fontSize = '1.5rem';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1000';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = window.innerHeight + 'px';
            heart.style.opacity = '0.8';
            heart.style.transition = 'transform 3s ease-out, opacity 3s ease-out';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.style.transform = `translateY(-${window.innerHeight + 200}px) rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.5})`;
                heart.style.opacity = '0';
            }, 10);
            
            setTimeout(() => {
                heart.remove();
            }, 3200);
        }, i * 100);
    }
}

function renderPage(page) {
    renderSidebar(page);
    container.innerHTML = '';
    container.appendChild(renderJumpToQuestion());
    const start = (page - 1) * QUESTIONS_PER_PAGE;
    const end = Math.min(start + QUESTIONS_PER_PAGE, examQuizData.length);
    for (let i = start; i < end; i++) {
        const q = examQuizData[i];
        const block = document.createElement('div');
        block.className = 'question-block';
        block.style.position = 'relative';
        block.innerHTML = `<div class="question-text" style="white-space: pre-line; text-align: left;">Câu ${i + 1}: ${marked.parseInline(q.question)}</div>`;

        const buttons = {};
        const opts = shuffledOptions[i].options;
        // Kiểm tra câu hỏi đặc biệt
        if (q.question.trim().toLowerCase().includes('m-xylene')) {
            const correctLetter = 'B';
            ['A', 'B', 'C', 'D'].forEach((letter, idx) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.style.display = 'flex';
                btn.style.alignItems = 'center';
                btn.style.justifyContent = 'center';
                btn.style.padding = '8px';
                btn.style.height = 'auto';
                btn.innerHTML = `<img src="images/mxylene_${letter}.png" alt="Đáp án ${letter}" style="max-width:180px;max-height:90px;display:block;">`;
                if (userAnswers[i]) {
                    btn.disabled = true;
                    btn.classList.remove('correct', 'incorrect');
                    if (letter === correctLetter) btn.classList.add('correct');
                    if (letter === userAnswers[i] && userAnswers[i] !== correctLetter) btn.classList.add('incorrect');
                }
                btn.onclick = () => {
                    if (letter === correctLetter) {
                        showEffect('heart', block);
                        createFloatingHearts();
                    } else {
                        showEffect('poop', block);
                    }
                    setTimeout(() => {
                        userAnswers[i] = letter;
                        saveUserAnswers();
                        renderPage(currentPage);
                    }, 600);
                };
                buttons[letter] = btn;
                block.appendChild(btn);
            });
        } else {
            // Xử lý các câu hỏi thông thường
            ['A', 'B', 'C', 'D'].forEach((letter, idx) => {
                const btn = document.createElement('button');
                btn.textContent = `${letter}. ${opts[idx].value}`;
                btn.className = 'option-btn';
                if (userAnswers[i]) {
                    btn.disabled = true;
                    btn.classList.remove('correct', 'incorrect');
                    if (letter === shuffledOptions[i].answer) btn.classList.add('correct');
                    if (letter === userAnswers[i] && userAnswers[i] !== shuffledOptions[i].answer) btn.classList.add('incorrect');
                }
                btn.onclick = () => {
                    if (letter === shuffledOptions[i].answer) {
                        showEffect('heart', block);
                        createFloatingHearts();
                    } else {
                        showEffect('poop', block);
                    }
                    setTimeout(() => {
                        userAnswers[i] = letter;
                        saveUserAnswers();
                        renderPage(currentPage);
                    }, 600);
                };
                buttons[letter] = btn;
                block.appendChild(btn);
            });
        }

        container.appendChild(block);
    }
    container.appendChild(renderPagination(page));
}

renderPage(currentPage);
