import { gql } from '@apollo/client'

export const GET_CATEGORIES = gql`
  query categories(
    $after: String
    $first: Int
    $searchKeyword: String
  ) {
    categories(
      after: $after
      first: $first
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          createdAt
          id
          categoryTitle
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`

export const GET_COLLECTIONS = gql`
  query collections(
    $after: String
    $first: Int
    $userId: String
  ) {
    collections(
      after: $after
      first: $first
      userId: $userId
    ) {
      edges {
        node {
          createdAt
          id
          collectionTitle
          totalQuestions
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`

export const GET_QUESTIONS = gql`
  query questions($categoryId: String, $collectionId: String, $after: String, $first: Int) {
    questions(collectionId: $collectionId, categoryId: $categoryId, after: $after, first: $first) {
      edges {
        node {
          category {
            categoryTitle
          }
          id
          questionTitle
          createdAt
          answers {
            id
            answer
            correct
          }
        }
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`

export const GET_AUTHORIZED_USER = gql`
  query authorizedUser {
    authorizedUser {
      username
      id
    }
  }
`