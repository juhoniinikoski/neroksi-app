import { gql } from '@apollo/client'

export const CREATE_QUESTION = gql`
  mutation createQuestion($question: String!, $answers: JSON!, $correctAnswer: Int!, $private: Boolean!, $category: ID!) {
    createQuestion(input: {
      data: {
        questionTitle: $question,
        answers: $answers,
        correctAnswer: $correctAnswer
        private: $private
        category: $category
      }
    }) {
      question {
        id
        questionTitle
        answers
        private
        correctAnswer
      }
    }
  }
`