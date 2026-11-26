const animations = new WeakMap();

export function animateScores(container = document) {
    container.querySelectorAll('[data-target]').forEach(score => {
        cancelAnimationFrame(animations.get(score));
        const target = Number(score.dataset.target);
        if (!Number.isFinite(target)) return;
        if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
            score.textContent = target.toLocaleString();
            return;
        }
        const start = performance.now();
        score.textContent = '0';
        function update(now) {
            const progress = Math.min((now - start) / 1500, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            score.textContent = Math.round(target * eased).toLocaleString();
            if (progress < 1) {
                animations.set(score, requestAnimationFrame(update));
            } else {
                animations.delete(score);
            }
        }
        animations.set(score, requestAnimationFrame(update));
    });
}
