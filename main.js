const container = document.getElementById('quiz-container');
const sidebar = document.getElementById('sidebar');
const QUESTIONS_PER_PAGE = 20;
let currentPage = 1;
const totalPages = Math.ceil(quizData.length / QUESTIONS_PER_PAGE);

// Lưu đáp án đã chọn cho từng câu (ưu tiên lấy từ localStorage nếu có)
const STORAGE_KEY = 'quiz_user_answers_v1';
function loadUserAnswers() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
            const arr = JSON.parse(data);
            if (Array.isArray(arr) && arr.length === quizData.length) return arr;
        }
    } catch {}
    return Array(quizData.length).fill(null);
}
function saveUserAnswers() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userAnswers));
}
function resetUserAnswers() {
    userAnswers.fill(null);
    saveUserAnswers();
    renderPage(currentPage);
}

const userAnswers = loadUserAnswers();

// Hàm trộn mảng (Fisher-Yates)
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// Tạo mảng lưu trữ thứ tự đáp án đã trộn cho từng câu
const shuffledOptions = quizData.map(q => {
    // Tạo mảng các đáp án với key và value
    const options = [
        { key: 'A', value: q.option_a },
        { key: 'B', value: q.option_b },
        { key: 'C', value: q.option_c },
        { key: 'D', value: q.option_d }
    ];
    shuffleArray(options);
    // Xác định đáp án đúng mới sau khi trộn
    const correctKey = options.find(opt => opt.key === q.answer);
    return {
        options,
        answer: String.fromCharCode(65 + options.indexOf(correctKey)) // 'A', 'B', 'C', 'D'
    };
});

// Render sidebar bên trái
function renderSidebar(selectedPage) {
    sidebar.innerHTML = '';
    const title = document.createElement('h2');
    title.textContent = 'Câu hỏi';
    sidebar.appendChild(title);

    // Tính số cột phù hợp để bảng sidebar ngắn lại và vừa với chiều ngang sidebar
    // Giả sử mỗi cột chiếm ~38px (số + đáp án), sidebar min-width 180px, max-width 320px
    // Ưu tiên số cột lớn nhất mà không vượt quá 90% chiều rộng sidebar
    const sidebarWidth = sidebar.offsetWidth || 320;
    const cellWidth = 38; // px
    let COLS = Math.floor((sidebarWidth * 0.9) / cellWidth);
    if (COLS < 10) COLS = 10;
    if (COLS > 20) COLS = 20;
    const total = quizData.length;
    const ROWS = Math.ceil(total / COLS);

    // Tạo wrapper để scroll riêng bảng
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
                let q = quizData[idx];
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
                // Đánh dấu selected nếu thuộc trang hiện tại
                const start = (selectedPage - 1) * QUESTIONS_PER_PAGE;
                const end = Math.min(start + QUESTIONS_PER_PAGE, total);
                if (idx >= start && idx < end) {
                    td_num.classList.add('selected');
                    td_ans.classList.add('selected');
                }
                td_num.style.cursor = td_ans.style.cursor = 'pointer';
                td_num.onclick = td_ans.onclick = () => {
                    const pageToGo = Math.ceil((idx + 1) / QUESTIONS_PER_PAGE);
                    currentPage = pageToGo;
                    renderPage(currentPage);
                    window.scrollTo(0, 0);
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

    // Hiển thị số câu đúng
    const score = document.createElement('div');
    score.className = 'score';
    score.textContent = `Đúng: ${correctCount} / ${quizData.length}`;
    sidebar.appendChild(score);

    // Nút reset kết quả
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset kết quả';
    resetBtn.className = 'reset-btn';
    resetBtn.style.margin = '16px auto 0 auto';
    resetBtn.style.display = 'block';
    resetBtn.onclick = resetUserAnswers;
    sidebar.appendChild(resetBtn);
}

// Only render "jump to question" controls at the top
function renderJumpToQuestion() {
    const nav = document.createElement('div');
    nav.style.display = 'flex';
    nav.style.justifyContent = 'center';
    nav.style.gap = '10px';
    nav.style.margin = '24px 0';
    nav.style.flexWrap = 'wrap';

    // Input for question index jump
    const indexInput = document.createElement('input');
    indexInput.type = 'number';
    indexInput.min = 1;
    indexInput.max = quizData.length;
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
        if (!isNaN(idx) && idx >= 1 && idx <= quizData.length) {
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

// Pagination controls (bottom)
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

    // Input for page jump
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

function renderPage(page) {
    renderSidebar(page);
    container.innerHTML = '';
    container.appendChild(renderJumpToQuestion());
    const start = (page - 1) * QUESTIONS_PER_PAGE;
    const end = Math.min(start + QUESTIONS_PER_PAGE, quizData.length);
    for (let i = start; i < end; i++) {
        const q = quizData[i];
        const block = document.createElement('div');
        block.className = 'question-block';
        block.innerHTML = `<div class="question-text">Q${i + 1}: ${q.question}</div>`;

        const buttons = {};
        const opts = shuffledOptions[i].options;
        const correctAnswer = shuffledOptions[i].answer;

        ['A', 'B', 'C', 'D'].forEach((letter, idx) => {
            const btn = document.createElement('button');
            btn.textContent = `${letter}. ${opts[idx].value}`;
            btn.className = 'option-btn';
            // Nếu đã chọn đáp án, disable và highlight luôn
            if (userAnswers[i]) {
                btn.disabled = true;
                btn.classList.remove('correct', 'incorrect');
                if (letter === correctAnswer) btn.classList.add('correct');
                if (letter === userAnswers[i] && userAnswers[i] !== correctAnswer) btn.classList.add('incorrect');
            }
            btn.onclick = () => {
                userAnswers[i] = letter;
                saveUserAnswers();
                renderPage(currentPage);
            };
            buttons[letter] = btn;
            block.appendChild(btn);
        });

        container.appendChild(block);
    }
    container.appendChild(renderPagination(page));
}

renderPage(currentPage);
