import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ApolloProvider } from '@apollo/client'
import { NativeRouter } from 'react-router-native'
import createApolloClient from './utils/apollo-client/apolloClient'

const apolloClient = createApolloClient()

import { useQuery } from '@apollo/client';

import { GET_ALL_CATEGORIES } from './utils/graphql/quories'

const Component = () => {

  const { data, error, loading } = useQuery(GET_ALL_CATEGORIES)

  console.log(data)

  return (
    <Text>Open up App.tsx to start working on your app!</Text>
  )
}

export default function App() {

  console.log('toimii')

  return (

    // <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Component />
      </ApolloProvider>
    // </NativeRouter>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
