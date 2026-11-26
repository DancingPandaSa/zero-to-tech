import { animateCards } from './cards.js';
import { animateScores } from './score.js';
import { initNavigation } from './nav.js';
import { initQA } from './qa.js';

const activePage = document.querySelector('.tab-content.active');
initNavigation();
initQA();
animateCards(activePage);
animateScores(activePage);
document.getElementById('update-button').addEventListener('click', () => {
    document.getElementById('msg').textContent = 'Dashboard message updated successfully!';
});
