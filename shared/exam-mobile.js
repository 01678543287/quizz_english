(function () {
    const prev = document.getElementById('exam-prev');
    const next = document.getElementById('exam-next');
    const sheetBtn = document.getElementById('exam-sheet-btn');
    const sheet = document.getElementById('exam-sheet');
    const backdrop = document.getElementById('exam-sheet-backdrop');
    const sheetClose = document.getElementById('exam-sheet-close');
    const sidebar = document.getElementById('sidebar');
    const pageNum = document.getElementById('exam-page-num');
    const pageTotal = document.getElementById('exam-page-total');
    const progressFill = document.getElementById('exam-progress-fill');
    const progressTrack = document.querySelector('.exam-page .progress-track');

    if (!prev || !next || !sheet || !pageNum) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const desktopQuery = window.matchMedia('(min-width: 900px) and (min-height: 600px)');
    let desktopMode = desktopQuery.matches;
    const examCount = typeof EXAM_QUESTION_COUNT === 'number' ? EXAM_QUESTION_COUNT : 40;
    const perPage = typeof QUESTIONS_PER_PAGE === 'number' ? QUESTIONS_PER_PAGE : 20;
    const pages = Math.max(1, Math.ceil(examCount / perPage));
    let lastFocus = null;

    function update(page) {
        const current = Number.isInteger(page) ? page : (typeof currentPage === 'number' ? currentPage : 1);
        pageNum.textContent = String(current);
        if (pageTotal) pageTotal.textContent = String(pages);
        if (progressFill) progressFill.style.width = `${(current / pages) * 100}%`;
        if (progressTrack) {
            progressTrack.setAttribute('aria-valuenow', String(current));
            progressTrack.setAttribute('aria-valuemax', String(pages));
        }
        prev.disabled = current <= 1;
        next.disabled = current >= pages;
    }

    function goTo(page) {
        if (page < 1 || page > pages) return;
        renderPage(page);
        window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    }

    prev.addEventListener('click', () => goTo(currentPage - 1));
    next.addEventListener('click', () => goTo(currentPage + 1));

    function openSheet() {
        if (desktopMode) return;
        lastFocus = document.activeElement;
        sheet.hidden = false;
        backdrop.hidden = false;
        document.body.classList.add('sheet-open');
        sheet.focus({ preventScroll: true });
    }

    function closeSheet() {
        if (desktopMode || sheet.hidden) return;
        sheet.hidden = true;
        backdrop.hidden = true;
        document.body.classList.remove('sheet-open');
        if (lastFocus && typeof lastFocus.focus === 'function') {
            lastFocus.focus();
        }
    }

    sheetBtn.addEventListener('click', openSheet);
    sheetClose.addEventListener('click', closeSheet);
    backdrop.addEventListener('click', closeSheet);
    if (sidebar) {
        sidebar.addEventListener('click', event => {
            if (event.target.closest('.exam-cell')) closeSheet();
        });
    }

    document.addEventListener('keydown', event => {
        if (desktopMode || sheet.hidden) return;
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
    });

    function syncLayout() {
        desktopMode = desktopQuery.matches;
        if (desktopMode) {
            sheet.hidden = false;
            backdrop.hidden = true;
            sheet.setAttribute('role', 'complementary');
            sheet.removeAttribute('aria-modal');
        } else {
            sheet.hidden = true;
            backdrop.hidden = true;
            sheet.setAttribute('role', 'dialog');
            sheet.setAttribute('aria-modal', 'true');
        }
    }

    if (desktopQuery.addEventListener) desktopQuery.addEventListener('change', syncLayout);
    syncLayout();

    document.addEventListener('exam-page-rendered', event => {
        update(event.detail.page);
    });

    update(currentPage);
})();
