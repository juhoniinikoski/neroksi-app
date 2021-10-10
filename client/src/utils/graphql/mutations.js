import { gql } from '@apollo/client'

export const AUTHORIZE = gql`
  mutation authorize($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`

export const CREATE_QUESTION = gql`
  mutation createQuestion(
    $categoryId: String!
    $questionTitle: String!
    $answers: [String!]!
    $correctId: Int!
    $private: Boolean!
    ) {
    createQuestion(
      question: {
        categoryId: $categoryId
        questionTitle: $questionTitle
        answers: $answers
        correctId: $correctId
        private: $private
      }
    ) {
      id
    }
  }
`