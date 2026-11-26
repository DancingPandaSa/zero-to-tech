export function animateCards(container = document) {
    container.querySelectorAll('.card, .stat-card').forEach((card, index) => {
        card.classList.remove('card-enter');
        void card.offsetWidth;
        card.style.animationDelay = `${index * 100}ms`;
        card.classList.add('card-enter');
    });
}
