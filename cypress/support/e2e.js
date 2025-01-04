// cypress/support/e2e.js
// Example: Automatically visit the home page before each test
beforeEach(() => {
    cy.visit('/');  // Adjust to your app's root URL
  });
  
  // You can also include custom commands here if needed
  