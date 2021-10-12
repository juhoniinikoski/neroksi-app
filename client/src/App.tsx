import React from 'react'
import { ApolloProvider } from '@apollo/client'
import colors from './styles/colorStyles'
import { View } from 'react-native'
import { AuthProvider } from './contexts/auth'
import { Router } from './navigation/router'
import { apolloClient } from './utils/apollo-client/apolloClient'

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