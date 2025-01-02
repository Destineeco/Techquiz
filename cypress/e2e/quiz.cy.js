describe('Quiz End-to-End Test', () => {
    it('should fetch and display random questions', () => {
      // Visit the quiz page
      cy.visit('/'); // Make sure this path is correct based on your app
  
      // Intercept the API call for random questions
      cy.intercept('GET', '/api/questions/random').as('getQuestions');
      cy.wait('@getQuestions');
  
      // Verify questions are displayed on the page
      cy.contains('What is the output of print(2 ** 3)?');
      cy.contains('Which of the following is a mutable data type in Python?');
  
      // Answer a question 
      cy.get('input[name="answer-0"]').check('8'); // For the first question
      cy.get('input[name="answer-1"]').check('list'); // For the second question
  
      // Submit the quiz and verify the score 
      cy.get('button[type="submit"]').click();
      cy.contains('Your score is 2/2'); // Example score
    });
  });
  