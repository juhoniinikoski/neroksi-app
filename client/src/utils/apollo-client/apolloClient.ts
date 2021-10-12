import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { relayStylePagination } from "@apollo/client/utilities"
import { setContext } from '@apollo/client/link/context'
import AsyncStorage from '@react-native-async-storage/async-storage'

const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql',
})

const authLink = setContext(async (_, { headers }) =>
  await AsyncStorage.getItem('@AuthData').then(data => {

    const token = data ? JSON.parse(data).token : null

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  })
)

// const authLink = setContext((_, { headers }) => {
//   retrieveData().then(data => ({
    
//   }))
//   // get the authentication token from local storage if it exists
//   const token = ''
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     }
//   }
// })

const createApolloClient = () => {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
      dataIdFromObject: o => (o._id ? `${o.__typename}:${o._id}`: undefined),
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

export const apolloClient = createApolloClient()

// https://github.com/apollographql/apollo-client/issues/6502
// https://github.com/apollographql/apollo-client/blob/main/src/utilities/policies/pagination.ts