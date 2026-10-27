(function () {
    const ICONS = {
        languages: '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
        pill: '<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',
        'flask-conical': '<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/>',
        'book-open': '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
        stethoscope: '<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/>',
        scale: '<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
        'chevron-right': '<path d="m9 18 6-6-6-6"/>',
        flame: '<path d="M12 3c1.5 3 4 4.5 4 8a4 4 0 0 1-8 0c0-1.5.5-2.5 1.5-3.5C9 9 9 6 12 3Z"/><path d="M12 21a5 5 0 0 0 5-5c0-2-1-3.5-2.5-5"/>'
    };

    function icon(name) {
        const path = ICONS[name] || ICONS['book-open'];
        return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
    }

    const subjects = Array.isArray(window.SUBJECTS) ? window.SUBJECTS : [];
    const list = document.getElementById('subjects-list');
    const continueSlot = document.getElementById('continue-slot');
    const subjectCount = document.getElementById('subject-count');
    const progressSummary = document.getElementById('progress-summary');

    function answeredFor(subject) {
        try {
            return QuizCore.countAnswered(localStorage.getItem(subject.storageKey), subject.count);
        } catch {
            return 0;
        }
    }

    function percent(subject) {
        if (!subject.count) return 0;
        const value = Math.round((subject.answered / subject.count) * 100);
        return subject.answered > 0 ? Math.min(100, Math.max(1, value)) : 0;
    }

    const enriched = subjects.map(subject => ({
        ...subject,
        answered: answeredFor(subject)
    }));

    const totalAnswered = enriched.reduce((sum, subject) => sum + subject.answered, 0);
    const totalQuestions = enriched.reduce((sum, subject) => sum + subject.count, 0);

    if (subjectCount) subjectCount.textContent = String(subjects.length);
    if (progressSummary) {
        progressSummary.textContent = totalAnswered > 0
            ? `${totalAnswered}/${totalQuestions} câu`
            : 'Chưa bắt đầu';
    }

    function renderContinue() {
        if (!continueSlot) return;
        if (!enriched.length) {
            continueSlot.innerHTML = '';
            return;
        }

        const started = enriched.filter(subject => subject.answered > 0);
        const next = started.length
            ? started.slice().sort((a, b) => (b.answered / b.count) - (a.answered / a.count))[0]
            : enriched[0];
        const pct = percent(next);
        const isStart = next.answered === 0;

        continueSlot.innerHTML = `
            <a class="continue-card" href="${next.path}" style="--accent:${next.accent}; --i:0" data-subject="${next.id}">
                <span class="continue-eyebrow">${isStart ? 'BẮT ĐẦU' : 'TIẾP TỤC'}</span>
                <span class="continue-name">${next.name}</span>
                <span class="continue-meta">${next.answered}/${next.count} câu</span>
                <span class="continue-progress" aria-hidden="true"><span style="width:${pct}%"></span></span>
                <span class="continue-arrow">${icon('chevron-right')}</span>
            </a>
        `;
    }

    function renderSubjects() {
        if (!list) return;
        list.innerHTML = '';

        enriched.forEach((subject, index) => {
            const pct = percent(subject);
            const meta = subject.answered > 0
                ? `${subject.count} câu · đã làm ${subject.answered}`
                : `${subject.count} câu`;

            const card = document.createElement('a');
            card.className = 'subject-card';
            card.href = subject.path;
            card.dataset.subject = subject.id;
            card.style.setProperty('--accent', subject.accent);
            card.style.setProperty('--i', String(index + 1));
            card.innerHTML = `
                <span class="subject-tab" aria-hidden="true"></span>
                <span class="subject-icon">${icon(subject.icon)}</span>
                <span class="subject-body">
                    <span class="subject-name">${subject.name}</span>
                    <span class="subject-meta">${meta}</span>
                    <span class="subject-progress" aria-hidden="true"><span style="width:${pct}%"></span></span>
                </span>
                <span class="subject-chevron" aria-hidden="true">${icon('chevron-right')}</span>
            `;
            list.appendChild(card);
        });
    }

    renderContinue();
    renderSubjects();
})();
