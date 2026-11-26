# Zero to Tech — Hospital Infection Dashboard

A modular healthcare dashboard built with HTML, CSS, JavaScript ES Modules, and Anime.js.

This project is part of my journey from healthcare data analytics to full-stack development and data engineering. It focuses on building maintainable applications, interactive data visualizations, and scalable software architecture.

## 1. Project Overview

The Hospital Infection Dashboard is a frontend prototype designed to visualize hospital infection statistics and explore the integration of business intelligence, artificial intelligence, and healthcare data.

The project follows a modular architecture, separating presentation, business logic, navigation, and animation into independent components.

## 2. Features

- **Infection Statistics** — Display infection case counts.
- **BI Dashboard** — Interactive statistical cards.
- **Animated Counters** — Smooth numerical transitions powered by Anime.js.
- **Card Animations** — Staggered entrance, fade-in, and scaling effects.
- **Navigation** — Animated transitions between BI & AI and MAP pages.
- **AI Question & Answer** — A frontend interface prepared for future AI integration.
- **Infection Map** — A placeholder for future hospital infection mapping.
- **Accessibility** — Support for reduced-motion preferences and accessible interface elements.
- **Modular Architecture** — Independent JavaScript modules with a single application entry point.

## 3. Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic elements |
| CSS3 | Layout, styling, and transitions |
| JavaScript (ES6+) | Application logic |
| ES Modules | Modular architecture and dependency management |
| Anime.js v4 | Interactive animations |
| Git | Version control |
| GitHub | Source code management |
| VS Code | Development environment |

## 4. Project Structure

    zero-to-tech/
    ├── README.md
    └── frontend/
        ├── index.html
        ├── style.css
        └── js/
            ├── main.js
            ├── cards.js
            ├── score.js
            ├── nav.js
            └── qa.js

### Module Responsibilities

| File | Responsibility |
|---|---|
| index.html | Application structure |
| style.css | Visual presentation and layout |
| main.js | Application entry point and initialization |
| cards.js | Card entrance animations |
| score.js | Animated numerical counters |
| nav.js | Navigation and page transitions |
| qa.js | Question-and-answer interface |

## 5. System Architecture

The application follows the Single Entry Point pattern.

    index.html
        │
        ├── style.css
        │
        └── main.js
              │
              ├── cards.js ── Anime.js
              ├── score.js ── Anime.js
              ├── nav.js   ── Anime.js
              └── qa.js

The main.js module coordinates application initialization, while each feature module manages its own functionality and dependencies.

### Architecture Principles

- Separation of Concerns
- Modular Architecture
- Single Entry Point
- Loose Coupling
- Reusability
- Maintainability
- Scalability

## 6. ES Modules

The application uses native JavaScript ES Modules to organize functionality.

The HTML file loads a single JavaScript entry point:

    <script type="module" src="./js/main.js"></script>

The main module imports individual feature modules:

    import { animateCards } from './cards.js';
    import { animateScores } from './score.js';
    import { initNavigation } from './nav.js';
    import { initQA } from './qa.js';

Modules that require animations import Anime.js directly:

    import { animate, stagger }
        from 'https://cdn.jsdelivr.net/npm/animejs@4/+esm';

This approach avoids unnecessary global variables and improves dependency management.

## 7. Getting Started

### Prerequisites

- A modern web browser
- Git
- Visual Studio Code
- A local HTTP server
- Internet access for the Anime.js CDN

### Run with VS Code

1. Clone the repository to your local machine.
2. Open the project in Visual Studio Code.
3. Install the Live Server extension.
4. Open frontend/index.html.
5. Select Open with Live Server.

### Run with Python

From the project root directory, execute:

    python3 -m http.server 8000 --directory frontend

Open the following URL in your browser:

http://localhost:8000

No npm installation or frontend build process is currently required.

## 8. Development Roadmap

### Phase 1 — Frontend Foundation

- [x] HTML structure
- [x] CSS styling
- [x] JavaScript modularization
- [x] Single application entry point
- [x] Card animations
- [x] Animated numerical counters
- [x] Navigation transitions

### Phase 2 — Interactive Dashboard

- [ ] Responsive layout improvements
- [ ] Interactive BI charts
- [ ] Data filtering
- [ ] Dark mode
- [ ] Loading animations
- [ ] AI typing effects
- [ ] Error handling improvements

### Phase 3 — Backend Development

- [ ] Python backend
- [ ] FastAPI REST API
- [ ] PostgreSQL database integration
- [ ] API-based data retrieval
- [ ] Authentication and authorization
- [ ] Logging and monitoring

### Phase 4 — Data Engineering

- [ ] Healthcare data ingestion
- [ ] ETL pipelines
- [ ] Data transformation
- [ ] Data validation and quality checks
- [ ] Data modeling
- [ ] Automated reporting

### Phase 5 — AI Integration

- [ ] Large language model integration
- [ ] Natural language queries
- [ ] Healthcare knowledge retrieval
- [ ] AI-assisted data analysis
- [ ] Retrieval-Augmented Generation (RAG)

### Phase 6 — DevOps and Deployment

- [ ] Docker containerization
- [ ] Nginx configuration
- [ ] CI/CD with GitHub Actions
- [ ] Cloud deployment
- [ ] Automated testing
- [ ] Environment management

## 9. Learning Objectives

This project is designed to develop practical software engineering and data engineering skills through incremental development.

Key learning areas include:

- Frontend development
- JavaScript ES Modules
- Software architecture
- Dependency management
- REST API development
- Database integration
- Data engineering pipelines
- Healthcare data analytics
- AI application development
- Git and DevOps practices

## 10. Data Privacy and Security

This project is currently a learning prototype using demonstration data.

It does not contain real patient records or personally identifiable information.

Any future integration with healthcare systems must comply with applicable data protection, information security, and institutional privacy requirements.

## 11. References

- [Anime.js](https://animejs.com/)
- [Anime.js Documentation](https://animejs.com/documentation/)
- [MDN — JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Documentation](https://docs.github.com/)

---

**From Zero to Tech — Building knowledge, one project at a time.**
