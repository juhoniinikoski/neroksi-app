import { gql } from '@apollo/client';

export const GET_ALL_CATEGORIES = gql`
  query {
    allCategories {
      name
      id
    }
  }
`

export const GET_CATEGORY = gql`
query findCategoryById($id: Int!) {
  findCategory(id: $id) {
    name
    id
    items {
      id
      question
      answers {
        ans
        id
      }
      correct
    }
  }
}
`

export const GET_QUESTIONS = gql`
query findQuestionsById($id: Int!) {
  findQuestions(categoryID: $id) {
    question
    id
    categoryID
    rightAns
    answers {
      ans
      id
    }
  }
}
`