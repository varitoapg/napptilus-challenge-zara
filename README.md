# Napptilus Challenge - Zara

This project is a web application focused on displaying, searching, and managing a catalog of mobile phones. The app allows users to view details about each device and efficiently manage a shopping cart.

**Live demo**: [https://zara-challenge.netlify.app/](https://zara-challenge.netlify.app/)

## Table of Contents

- [Code Quality](#code-quality)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Other scripts](#other-scripts)
- [Architecture](#architecture)
- [Room for Improvement](#room-for-improvement)
- [Contact](#contact)

## Code Quality

- [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=varitoapg_napptilus-challenge-zara&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=varitoapg_napptilus-challenge-zara)

- [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=varitoapg_napptilus-challenge-zara&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=varitoapg_napptilus-challenge-zara)
- [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=varitoapg_napptilus-challenge-zara&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=varitoapg_napptilus-challenge-zara)
- [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=varitoapg_napptilus-challenge-zara&metric=coverage)](https://sonarcloud.io/summary/new_code?id=varitoapg_napptilus-challenge-zara)
- [![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=varitoapg_napptilus-challenge-zara&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=varitoapg_napptilus-challenge-zara)

## Technologies Used

### Frontend

- **React 18**: A modern library for building dynamic and responsive user interfaces.
- **Vite**: A fast and efficient build tool that provides lightning-fast development server and optimized production builds.

### Linting and Formatting

- **ESLint**: Ensures code consistency and enforces JavaScript and React best practices.
- **Prettier**: A code formatter for maintaining a clean and consistent coding style.

### Testing

- **Vitest**: A blazing-fast testing framework with built-in TypeScript support for running unit tests and generating coverage reports.
- **@testing-library/react**: Facilitates testing React components in a manner close to how they’re used by users.
- **@testing-library/jest-dom**: Provides custom matchers for making assertions about the DOM.
- **Playwright**: A robust end-to-end testing framework for automated UI testing with a rich test runner.

### State Management

- **React Context API**: Simplifies global state management without introducing external dependencies.

### API Integration

- **Axios**: A promise-based HTTP client for making API requests.
- **Authentication**: Secures API communication using an `x-api-key` header for authenticated requests.

### Development Workflow

- **Husky**: Automates Git hooks to enforce linting and formatting checks before committing.
- **Lint-Staged**: Ensures only staged files are linted, speeding up the commit process.

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/varitoapg/napptilus-challenge-zara.git
   cd napptilus-challenge-zara
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create a `.env` file**:

   Create a `.env` file similar to `.env.example` with real values.

4. **Run the development mode**:

   ```bash
   npm run dev
   ```

5. **Build for production**:

   ```bash
   npm run build
   ```

6. **Preview the production build**:

   ```bash
   npm run preview
   ```

## Other scripts

### Running tests

- **Run all tests**:

  ```bash
  npm run test
  ```

- **Run tests with coverage**:

  ```bash
  npm run coverage
  ```

- **Run E2E tests**:
  ```bash
  npm run playwright
  ```

### Running linter

```bash
npm run lint
```

## Architecture

The architecture of this project follows a modular and component-based approach.

The project has the following folder structure:

```
.github/
    workflows/
.gitignore
.husky/
coverage/
e2e/
    tests/
public/
src/
    adapters/
    components/
    contexts/
    hooks/
    mocks/
    pages/
    services/
    setupTest.js
    utils/
    index.css
    main.jsx
index.html
.env
.env.example
README.md
package.json
eslint.config.js
playwright.config.js
sonar-project.properties
vite.config.js
```

- **.github/**: Contains GitHub workflows for CI/CD.
- **.husky/**: Contains Git hooks for enforcing code quality.
- **e2e/**: Contains end-to-end tests.
- **public/**: Contains static assets.
- **src/**: Contains the source code of the application.
  - **adapters/**: Contains adapter functions for API integration.
  - **components/**: Contains reusable React components.
  - **contexts/**: Contains React context providers.
  - **hooks/**: Contains custom React hooks.
  - **mocks/**: Contains mock data for testing.
  - **pages/**: Contains page components for different routes.
  - **services/**: Contains services for API calls.
  - **utils/**: Contains utility functions.
- **README.md**: Project documentation.
- **sonar-project.properties**: Configuration for SonarQube.
- **.env**: File with environment variables.
- **eslint.config.js**: Configuration for ESlint.
- **vite.config.js**: Configuration for Vite.
- **playwright.config.js**: Configuration for Playwright.

## Room for Improvement

There were several enhancements I planned but couldn’t implement due to time constraints and initial setup challenges (e.g., losing the first day attempting to set up Jest with Vite). Here’s the list:

- Implement pagination on the main page for a better user experience.
- Apply smoother styles across the app for improved UI/UX consistency.
- Enable name color changes on hover in the phone details page for visual feedback.
- Improve the approach to fetching the first 20 phones. While I created a function to remove duplicates, the current implementation can be optimized further.
- Improve the images optimization.
- Make a better carousel at similar options in phone detail page.

## Contact

Feel free to reach out or connect with me:

- **LinkedIn**: [Álvaro Parada](https://www.linkedin.com/in/alvaro-parada/)
- **GitHub**: [varitoapg](https://github.com/varitoapg)
