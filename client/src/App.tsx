import React from 'react'
import { ApolloProvider } from '@apollo/client'
import createApolloClient from './utils/apollo-client/apolloClient'
import colors from './styles/colorStyles'
import { View } from 'react-native'
import { AuthProvider } from './contexts/auth'
import { Router } from './navigation/router'

const apolloClient = createApolloClient()

export default function App() {

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      {/* <AuthContext.Provider value={authContext}> */}
      <AuthProvider>
        <ApolloProvider client={apolloClient}>
          <Router />
        </ApolloProvider>
      </AuthProvider>
      {/* </AuthContext.Provider> */}
    </View>
  )
}