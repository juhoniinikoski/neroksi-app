import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { relayStylePagination } from "@apollo/client/utilities"
import { setContext } from '@apollo/client/link/context'
import AsyncStorage from '@react-native-async-storage/async-storage'

const httpLink = createHttpLink({
  uri: `http://localhost:4000/graphql`,
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