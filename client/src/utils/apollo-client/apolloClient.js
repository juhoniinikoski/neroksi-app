import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { mergeDeep, relayStylePagination } from "@apollo/client/utilities"

const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql',
})

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({
      dataIdFromObject: o => (o._id ? `${o.__typename}:${o._id}`: null),
      typePolicies: {
        Query: {
          fields: {
            categories: relayStylePagination()
          },
        },
        Category: {
          fields: {
            questions: relayStylePagination()
          }
        }
      },
    })
  })
}

// https://github.com/apollographql/apollo-client/issues/6502
// https://github.com/apollographql/apollo-client/blob/main/src/utilities/policies/pagination.ts

export default createApolloClient;