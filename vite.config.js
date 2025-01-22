import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "src/setupTest.js",
    exclude: ["e2e/**/*", "**/node_modules/**"], // Exclude Playwright tests from Vitest
    coverage: {
      provider: "v8",
      include: ["src/**/*.{js,jsx,ts,tsx}"],
      exclude: ["src/main.jsx", "**/e2e/**/*"],
      reporter: ["lcov", "text"],
    },
  },
});
