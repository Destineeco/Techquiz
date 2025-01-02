import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz'; // Adjust the import path

describe('Quiz Component', () => {
  it('should render quiz questions and answers', () => {
    const mockQuestions = [
      {
        question: "What is the output of print(2 ** 3)?",
        answers: [
          { text: "6", isCorrect: false },
          { text: "8", isCorrect: true },
          { text: "9", isCorrect: false },
          { text: "12", isCorrect: false }
        ]
      },
      {
        question: "Which of the following is a mutable data type in Python?",
        answers: [
          { text: "str", isCorrect: false },
          { text: "tuple", isCorrect: false },
          { text: "list", isCorrect: true },
          { text: "int", isCorrect: false }
        ]
      }
    ];

    // Mount the Quiz component with mock data
    mount(<Quiz questions={mockQuestions} />);

    // Verify if the questions and answers are rendered
    cy.contains('What is the output of print(2 ** 3)?');
    cy.contains('Which of the following is a mutable data type in Python?');
  });

  it('should allow answering questions', () => {
    const mockQuestions = [
      {
        question: "What is the output of print(2 ** 3)?",
        answers: [
          { text: "6", isCorrect: false },
          { text: "8", isCorrect: true },
          { text: "9", isCorrect: false },
          { text: "12", isCorrect: false }
        ]
      }
    ];

    mount(<Quiz questions={mockQuestions} />);

    // Simulate selecting the correct answer
    cy.get('input[name="answer-0"]').check('8');

    // Simulate submitting the quiz
    cy.get('button[type="submit"]').click();

    // Verify the result, assuming you show the score
    cy.contains('Your score is 1/1');
  });
});
