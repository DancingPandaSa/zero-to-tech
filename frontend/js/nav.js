import { animateCards } from './cards.js';
import { animateScores } from './score.js';

export function initNavigation() {
    const buttons = document.querySelectorAll('.tab-button');
    const pages = document.querySelectorAll('.tab-content');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const page = document.getElementById(button.dataset.page);
            if (!page) return;
            buttons.forEach(btn => {
                btn.classList.toggle('active', btn === button);
                btn.setAttribute('aria-pressed', String(btn === button));
            });
            pages.forEach(p => p.classList.toggle('active', p === page));
            animateCards(page);
            animateScores(page);
        });
    });
}
