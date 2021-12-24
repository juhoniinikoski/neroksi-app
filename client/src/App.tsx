import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { themeColors } from './styles/colorStyles'
import { View } from 'react-native'
import { AuthProvider } from './contexts/auth'
import { Router } from './navigation/router'
import { apolloClient } from './utils/apollo-client/apolloClient'

export default function App() {

  return (
    <View style={{flex: 1, backgroundColor: themeColors.primaryBackground}}>
      <AuthProvider>
        <ApolloProvider client={apolloClient}>
          <Router />
        </ApolloProvider>
      </AuthProvider>
    </View>
  )
}