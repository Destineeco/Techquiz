import { defineConfig } from 'cypress';
import { mount } from 'cypress/react18';
import react from '@vitejs/plugin-react';
import { defineConfig as defineViteConfig } from 'vite';

// Define the Cypress config with Vite integration
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Your app's base URL for E2E tests
    setupNodeEvents(on, config) {
      // Set up any additional custom node events here, if necessary
      return config;
    },
  },
  component: {
    supportFile: false, // Disable the support file for component testing
    devServer: {
      framework: 'react', // Set React as the framework
      bundler: 'vite', // Use Vite as the bundler
      viteConfig: defineViteConfig({
        plugins: [react()], // Use React plugin for Vite
        // Add any other specific Vite configurations if required
      }),
    },
  },
});
