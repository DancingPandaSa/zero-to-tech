
import { animate, stagger } from 'https://cdn.jsdelivr.net/npm/animejs@4/+esm';

const animations = new WeakMap();

export function animateCards(container = document) {

    const cards = container.querySelectorAll(
        '.card, .stat-card'
    );

    if (!cards.length) return;

    animations.get(container)?.cancel();

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    const animation = animate(cards, {
        opacity: { from: 0, to: 1 },
        translateY: { from: 40, to: 0 },
        scale: { from: 0.95, to: 1 },

        duration: 800,
        delay: stagger(120),
        ease: 'outExpo'
    });

    animations.set(container, animation);
}
