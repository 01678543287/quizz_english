(function () {
    const config = window.EXAM_HISTORY_CONFIG;
    const prevButton = document.getElementById('exam-prev-exam');
    const nextButton = document.getElementById('exam-next-exam');
    if (!config || !prevButton || !nextButton) return;

    function read(key, fallback = null) {
        try {
            const raw = localStorage.getItem(key);
            return raw === null ? fallback : JSON.parse(raw);
        } catch {
            return fallback;
        }
    }

    function write(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch {}
    }

    function remove(key) {
        try {
            localStorage.removeItem(key);
        } catch {}
    }

    function getTimeline() {
        const timeline = read(config.history, []);
        return Array.isArray(timeline) ? timeline : [];
    }

    function getCursor() {
        const value = read(config.cursor, 0);
        return Number.isInteger(value) && value >= 0 ? value : 0;
    }

    function snapshotCurrent() {
        return {
            indexes: read(config.indexes, null),
            options: read(config.options, null),
            answers: read(config.answers, null),
            seen: read(config.seen, null),
            cycle: read(config.cycle, null)
        };
    }

    function restoreSnapshot(snapshot) {
        if (!snapshot) return;

        if (Array.isArray(snapshot.indexes)) write(config.indexes, snapshot.indexes);
        else remove(config.indexes);

        if (snapshot.options) write(config.options, snapshot.options);
        else remove(config.options);

        if (snapshot.answers) write(config.answers, snapshot.answers);
        else remove(config.answers);

        if (Array.isArray(snapshot.seen)) write(config.seen, snapshot.seen);
        else remove(config.seen);

        if (snapshot.cycle !== null && snapshot.cycle !== undefined) write(config.cycle, snapshot.cycle);
        else remove(config.cycle);
    }

    function saveCurrentInto(position) {
        const timeline = getTimeline();
        if (!timeline[position]) return;
        timeline[position] = snapshotCurrent();
        write(config.history, timeline);
    }

    function updateButtons() {
        const timeline = getTimeline();
        const cursor = getCursor();
        prevButton.disabled = !timeline.length || cursor <= 0;
        nextButton.disabled = !timeline.length;
    }

    function previousExam() {
        const cursor = getCursor();
        if (cursor <= 0) return;
        saveCurrentInto(cursor);
        write(config.pending, { action: 'goto', position: cursor - 1 });
        window.location.reload();
    }

    function nextExam() {
        const timeline = getTimeline();
        const cursor = getCursor();
        if (!timeline.length) return;

        saveCurrentInto(cursor);

        if (cursor < timeline.length - 1) {
            write(config.pending, { action: 'goto', position: cursor + 1 });
            window.location.reload();
            return;
        }

        // Đang ở đề mới nhất: tạo đề tiếp theo.
        write(config.pending, { action: 'new' });
        remove(config.indexes);
        remove(config.options);
        remove(config.answers);
        window.location.reload();
    }

    // Khôi phục đề đích trước khi exam.js đọc localStorage.
    const pending = read(config.pending, null);
    const initialTimeline = getTimeline();
    if (pending && pending.action === 'goto' && initialTimeline[pending.position]) {
        restoreSnapshot(initialTimeline[pending.position]);
        write(config.cursor, pending.position);
        remove(config.pending);
    }

    function init() {
        let timeline = getTimeline();
        const pendingNew = read(config.pending, null);
        const cursor = read(config.cursor, null);

        if (pendingNew && pendingNew.action === 'new') {
            timeline.push(snapshotCurrent());
            while (timeline.length > 20) timeline.shift();
            write(config.history, timeline);
            write(config.cursor, timeline.length - 1);
            remove(config.pending);
        } else if (!timeline.length) {
            write(config.history, [snapshotCurrent()]);
            write(config.cursor, 0);
        } else if (!Number.isInteger(cursor)) {
            // Nâng cấp từ lịch sử cũ: thêm đề đang hiển thị vào cuối timeline.
            timeline.push(snapshotCurrent());
            while (timeline.length > 20) timeline.shift();
            write(config.history, timeline);
            write(config.cursor, timeline.length - 1);
        }

        updateButtons();
    }

    prevButton.addEventListener('click', previousExam);
    nextButton.addEventListener('click', nextExam);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
