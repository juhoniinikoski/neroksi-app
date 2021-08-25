import React from 'react'
import { ApolloProvider } from '@apollo/client'
import createApolloClient from './utils/apollo-client/apolloClient'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { RootStack } from './navigation/rootStack'
import colors from './styles/colorStyles'

const apolloClient = createApolloClient()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background
  },
};

export default function App() {

  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer theme={theme}>
        <RootStack />
      </NavigationContainer>
    </ApolloProvider>
  )
}