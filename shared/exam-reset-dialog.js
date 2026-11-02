(function () {
    const dialog = document.getElementById('exam-reset-dialog');
    const backdrop = document.getElementById('exam-reset-dialog-backdrop');
    const cancel = document.getElementById('exam-reset-cancel');
    const confirm = document.getElementById('exam-reset-confirm');
    if (!dialog || !backdrop || !cancel || !confirm) return;

    let lastTrigger = null;

    function open(trigger) {
        lastTrigger = trigger || document.activeElement;
        dialog.hidden = false;
        backdrop.hidden = false;
        document.body.classList.add('dialog-open');
        dialog.focus({ preventScroll: true });
    }

    function close(returnFocus = true) {
        dialog.hidden = true;
        backdrop.hidden = true;
        document.body.classList.remove('dialog-open');
        if (returnFocus && lastTrigger && document.contains(lastTrigger) && typeof lastTrigger.focus === 'function') {
            lastTrigger.focus({ preventScroll: true });
        }
        lastTrigger = null;
    }

    function confirmReset() {
        dialog.hidden = true;
        backdrop.hidden = true;
        document.body.classList.remove('dialog-open');
        lastTrigger = null;

        if (typeof window.resetUserAnswers === 'function') {
            window.resetUserAnswers();
        }

        const sheet = document.getElementById('exam-sheet');
        if (sheet && !sheet.hidden) {
            sheet.focus({ preventScroll: true });
        }
    }

    window.requestExamReset = open;

    cancel.addEventListener('click', () => close());
    confirm.addEventListener('click', confirmReset);
    backdrop.addEventListener('click', () => close());

    // Chặn handler bàn phím của sheet khi dialog đang mở.
    document.addEventListener('keydown', event => {
        if (dialog.hidden) return;

        event.stopImmediatePropagation();

        if (event.key === 'Escape') {
            event.preventDefault();
            close();
            return;
        }

        if (event.key !== 'Tab') return;

        const focusables = dialog.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (document.activeElement === dialog) {
            event.preventDefault();
            (event.shiftKey ? last : first).focus();
            return;
        }

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }, true);
})();
