import { gql } from '@apollo/client';

// export const GET_CATEGORIES = gql`
//   query {
//     categories {
//       id
//       categoryTitle
//     }
//   }
// `

export const GET_CATEGORIES = gql`
  query categories(
    $after: String
    $first: Int
  ) {
    categories(
      after: $after
      first: $first
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

export const GET_QUESTIONS = gql`
  query category($id: ID!, $after: String, $first: Int) {
    category(id: $id) {
      id
      categoryTitle
      questions(after: $after, first: $first) {
        edges {
          node {
            id
            questionTitle
            createdAt
            answers {
              id
              answer
              correct
            }
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
  }
`;

// export const GET_QUESTIONS = gql`
//   query questions(
//     $categoryId: String!
//     $after: String
//     $first: Int
//     ) {
//     questions(
//       categoryId: $categoryId
//       first: $first
//       after: $after
//       ) {
//       edges {
//         node {
//           id
//           questionTitle
//         }
//         cursor
//       }
//       pageInfo {
//         endCursor
//         startCursor
//         hasNextPage
//       }
//     }
//   }
// `




// export const GET_CATEGORY = gql`
// query findCategoryById($id: ID!) {
//   category(id: $id) {
//     categoryTitle
//     id
//     questions {
//       id
//       questionTitle
//     }
//   }
// }
// `

// export const GET_QUESTIONS = gql`
// query findQuestionsById($id: ID!) {
//   category(id: $id) {
//     categoryTitle
//     id
//     questions {
//       id
//       questionTitle
//       answers
//     }
//   }
// }
// `