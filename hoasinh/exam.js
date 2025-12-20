// Số câu kiểm tra
const EXAM_QUESTION_COUNT = 40;
const QUESTIONS_PER_PAGE = 20;
const STORAGE_KEY = 'quiz_exam_answers_hoasinh_v1';

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// Khi vào trang này (hoặc reload), luôn random lại bộ đề và xóa hết dữ liệu cũ
const examIndexesKey = 'quiz_exam_indexes_hoasinh_v1';
const shuffledOptionsKey = 'quiz_exam_shuffled_options_hoasinh_v1';
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
    // Luôn trả về mảng rỗng khi vào trang này
    return Array(EXAM_QUESTION_COUNT).fill(null);
}
function saveUserAnswers() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userAnswers));
}
function resetUserAnswers() {
    // Chỉ xóa đáp án và trộn lại câu trả lời, giữ nguyên bộ câu hỏi
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(shuffledOptionsKey);
    userAnswers.fill(null);
    
    // Tạo lại shuffledOptions mới với câu hỏi cũ
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
    
    // Cập nhật shuffledOptions global
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

    // Tính số cột phù hợp để bảng sidebar ngắn lại và vừa với chiều ngang sidebar
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
                let q = examQuizData[idx];
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

// Hiệu ứng trái tim, đống phân, mặt cười chảy nước mắt
function showEffect(type, parent) {
    // Xóa hiệu ứng cũ nếu có
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
    effect.textContent = type === 'heart' ? '💖' : (type === 'laugh' ? '😂' : '💩');
    parent.appendChild(effect);
    setTimeout(() => {
        effect.style.transform = 'translate(-50%, -50%) scale(2.5)';
        effect.style.opacity = '0';
    }, 10);
    setTimeout(() => {
        effect.remove();
    }, 800);

    // Hiệu ứng bay trên background cho trái tim
    if (type === 'heart') {
        createFloatingHearts();
    }
    // Hiệu ứng bay trên background cho mặt cười
    if (type === 'laugh') {
        createFloatingLaughs();
    }
    // Hiệu ứng con heo chạy vòng quanh cho đáp án sai
    if (type === 'poop') {
        createRunningPig();
    }
}

// Tạo hiệu ứng trái tim bay trên background
function createFloatingHearts() {
    for (let i = 0; i < 24; i++) { // tăng số lượng lên 24
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
            
            // Animate upwards
            setTimeout(() => {
                heart.style.transform = `translateY(-${window.innerHeight + 200}px) rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.5})`;
                heart.style.opacity = '0';
            }, 10);
            
            // Remove after animation
            setTimeout(() => {
                heart.remove();
            }, 3200);
        }, i * 60);
    }
}

// Tạo hiệu ứng mặt cười chảy nước mắt bay trên background
function createFloatingLaughs() {
    for (let i = 0; i < 24; i++) { // tăng số lượng lên 24
        setTimeout(() => {
            const laugh = document.createElement('div');
            laugh.textContent = '😂';
            laugh.style.position = 'fixed';
            laugh.style.fontSize = '2rem';
            laugh.style.pointerEvents = 'none';
            laugh.style.zIndex = '3000';
            laugh.style.left = Math.random() * window.innerWidth + 'px';
            laugh.style.top = window.innerHeight + 'px';
            laugh.style.opacity = '0.85';
            laugh.style.transition = 'transform 3s ease-out, opacity 3s ease-out';
            document.body.appendChild(laugh);
            
            setTimeout(() => {
                laugh.style.transform = `translateY(-${window.innerHeight + 200}px) rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.5})`;
                laugh.style.opacity = '0';
            }, 10);
            
            setTimeout(() => {
                laugh.remove();
            }, 3200);
        }, i * 60);
    }
}

// Hiệu ứng con heo chạy vòng quanh màn hình
function createRunningPig() {
    const pig = document.createElement('div');
    pig.textContent = '🐖';
    pig.style.position = 'fixed';
    pig.style.left = '-60px';
    pig.style.top = '50%';
    pig.style.fontSize = '3rem';
    pig.style.zIndex = '2000';
    pig.style.transition = 'none';
    pig.style.pointerEvents = 'none';

    document.body.appendChild(pig);

    // Các điểm để chạy vòng quanh màn hình (theo chiều kim đồng hồ)
    const path = [
        { left: -60, top: window.innerHeight / 2 - 40, rotate: 0 },
        { left: window.innerWidth - 40, top: window.innerHeight / 2 - 40, rotate: 0 },
        { left: window.innerWidth - 40, top: window.innerHeight - 60, rotate: 90 },
        { left: -60, top: window.innerHeight - 60, rotate: 180 },
        { left: -60, top: -40, rotate: 270 },
        { left: window.innerWidth - 40, top: -40, rotate: 0 },
        { left: window.innerWidth - 40, top: window.innerHeight / 2 - 40, rotate: 90 },
        { left: -60, top: window.innerHeight / 2 - 40, rotate: 180 }
    ];

    let i = 0;
    function moveNext() {
        if (i >= path.length) {
            pig.remove();
            return;
        }
        const p = path[i];
        pig.style.transition = 'left 0.5s linear, top 0.5s linear, transform 0.5s linear';
        pig.style.left = p.left + 'px';
        pig.style.top = p.top + 'px';
        pig.style.transform = `rotate(${p.rotate}deg)`;
        i++;
        setTimeout(moveNext, 400);
    }
    setTimeout(moveNext, 10);
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
        block.innerHTML = `<div class="question-text">Q${i + 1}: ${q.question}</div>`;

        const buttons = {};
        const opts = shuffledOptions[i].options;
        const correctAnswer = shuffledOptions[i].answer;

        ['A', 'B', 'C', 'D'].forEach((letter, idx) => {
            const btn = document.createElement('button');
            btn.textContent = `${letter}. ${opts[idx].value}`;
            btn.className = 'option-btn';
            if (userAnswers[i]) {
                btn.disabled = true;
                btn.classList.remove('correct', 'incorrect');
                if (letter === correctAnswer) btn.classList.add('correct');
                if (letter === userAnswers[i] && userAnswers[i] !== correctAnswer) btn.classList.add('incorrect');
            }
            btn.onclick = () => {
                // Hiệu ứng trước khi lưu và render lại
                if (letter === correctAnswer) {
                    showEffect('heart', block);
                } else {
                    showEffect('laugh', block);
                }
                
                // Tăng delay để hiệu ứng có thể thấy rõ hơn
                setTimeout(() => {
                    userAnswers[i] = letter;
                    saveUserAnswers();
                    renderPage(currentPage);
                }, 600);
            };
            buttons[letter] = btn;
            block.appendChild(btn);
        });

        container.appendChild(block);
    }
    container.appendChild(renderPagination(page));
}

renderPage(currentPage);
