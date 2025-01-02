describe('Tech Quiz', () => {
    beforeEach(() => {
      // Load the mock questions from fixtures
      cy.fixture('questions.json').as('mockQuestions');
  
      // Intercept the API call and respond with the mock questions
      cy.intercept('GET', '/api/questions/random', {
        statusCode: 200,
        body: this.mockQuestions, // Use the mock questions here
      }).as('getRandomQuestions');
    });
  
    it('should display a quiz question', () => {
      // Visit the page that triggers the API call to load questions
      cy.visit('/');
  
      // Wait for the API call to be intercepted
      cy.wait('@getRandomQuestions');
  
      // Assert that the quiz questions are displayed
      cy.get('.quiz-question').should('be.visible');
      cy.get('.quiz-answer').should('have.length', 4); // Assuming 4 answers per question
    });
  
    it('should allow selecting an answer', () => {
      cy.visit('/');
  
      // Wait for questions to load
      cy.wait('@getRandomQuestions');
  
      // Click on an answer
      cy.get('.quiz-answer').first().click();
  
      // Assert that the answer was selected
      cy.get('.quiz-answer.selected').should('have.length', 1);
    });
  });
  