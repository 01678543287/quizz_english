(function () {
    const button = document.getElementById('back-to-top');
    if (!button) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const toggle = () => {
        button.hidden = window.scrollY < 320;
    };

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: reduceMotion ? 'auto' : 'smooth'
        });
    });

    window.addEventListener('scroll', toggle, { passive: true });
    toggle();
})();
