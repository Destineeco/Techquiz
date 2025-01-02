import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: 'cypress/support/component.ts', // Add this line to point to the support file for E2E tests
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    specPattern: "cypress/component/**/*.cy.{js,ts,jsx,tsx}",
    supportFile: 'cypress/support/component.ts', // Add this line to point to the support file for Component tests
  },
});
