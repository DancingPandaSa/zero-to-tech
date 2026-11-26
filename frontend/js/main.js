
// ========================================
// 1. Import Modules
// ========================================

import { animateCards } from './cards.js';
import { animateScores } from './score.js';
import { initNavigation } from './nav.js';
import { initQA } from './qa.js';


// ========================================
// 2. Initialize Dashboard
// ========================================

function initDashboard() {

    const activePage = document.querySelector(
        '.tab-content.active'
    );

    // 初始化卡片及數字動畫
    if (activePage) {
        animateCards(activePage);
        animateScores(activePage);
    }

}


// ========================================
// 3. Initialize Global Events
// ========================================

function initEvents() {

    const updateButton = document.getElementById(
        'update-button'
    );

    const message = document.getElementById('msg');

    if (updateButton && message) {

        updateButton.addEventListener('click', () => {

            message.textContent =
                'Dashboard message updated successfully!';

        });

    }

}


// ========================================
// 4. Application Entry Point
// ========================================

function initApp() {

    console.log('Application initializing...');

    try {

        initNavigation();

        initQA();

        initDashboard();

        initEvents();

        console.log('Application initialized successfully.');

    } catch (error) {

        console.error('Application initialization failed:', error);

    }

}


// ========================================
// 5. Start Application
// ========================================

initApp();
