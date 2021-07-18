import React from 'react'
import { ApolloProvider } from '@apollo/client'
import createApolloClient from './utils/apollo-client/apolloClient'
import { NavigationContainer } from '@react-navigation/native'
import { RootStack } from './navigation/stackNav'

const apolloClient = createApolloClient()

export default function App() {

  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ApolloProvider>
  )
}