import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { mergeDeep, relayStylePagination } from "@apollo/client/utilities"

const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql',
});

const updateQuery = (previousResult, { fetchMoreResult }) => {
  const nextResult = {
    category: {
      ...fetchMoreResult.category,
      questions: {
        ...fetchMoreResult.category.questions,
        edges: [
          ...previousResult.category.questions.edges,
          ...fetchMoreResult.category.questions.edges,
        ],
      },
    },
  };
  return nextResult
}

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({
      dataIdFromObject: o => (o._id ? `${o.__typename}:${o._id}`: null),
      typePolicies: {
        Query: {
          fields: {
            categories: relayStylePagination(["query"]),
            questions: relayStylePagination()
          },
        },
      },
    })
  })
}

// https://github.com/apollographql/apollo-client/issues/6502
// https://github.com/apollographql/apollo-client/blob/main/src/utilities/policies/pagination.ts

export default createApolloClient;