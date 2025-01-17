# Napptilus Challenge - Zara

This project is a web application focused on displaying, searching, and managing a catalog of mobile phones. The app allows users to view details about each device and efficiently manage a shopping cart.

## Technologies Used

### Frontend

- **React 18**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.

### Linting and Formatting

- **ESLint**: A tool for identifying and fixing problems in JavaScript/React code.
- **Prettier**: A code formatter to ensure consistent style.

### Testing

- **Vitest**: A testing framework for running unit tests and generating test coverage.
- **@testing-library/react**: Utilities for testing React components.
- **@testing-library/jest-dom**: Custom matchers for DOM assertions in Jest.

### State Management

- **React Context API**: A React API for managing global application state.

### API Integration

- **Authentication**: The app uses an API key (`x-api-key`) for authenticating requests to the REST API. This key should be added to the headers of each API request for secure access.

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/varitoapg/napptilus-challenge.git
   cd napptilus-challenge
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development mode**:

   ```bash
   npm run dev
   ```

4. **Build for production**:

   ```bash
   npm run build
   ```

5. **Preview the production build**:

   ```bash
   npm run preview
   ```

## Other scripts

### Running tests

- **Run all tests**:

  ```bash
  npm run test
  ```

- **Run tests in watch mode**:

  ```bash
  npm run test:watch
  ```

- **Run tests with coverage**:
  ```bash
  npm run test:coverage
  ```

### Running linter

```bash
npm run lint
```
