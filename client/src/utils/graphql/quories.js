import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query {
    categories {
      id
      categoryTitle
    }
  }
`

export const GET_CATEGORY = gql`
query findCategoryById($id: ID!) {
  category(id: $id) {
    categoryTitle
    id
    questions {
      id
      questionTitle
    }
  }
}
`

export const GET_QUESTIONS = gql`
query findQuestionsById($id: ID!) {
  category(id: $id) {
    categoryTitle
    id
    questions {
      id
      questionTitle
      answers
    }
  }
}
`