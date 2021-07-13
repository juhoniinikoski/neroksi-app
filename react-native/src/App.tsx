import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { ApolloProvider } from '@apollo/client'
import createApolloClient from './utils/apollo-client/apolloClient'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const apolloClient = createApolloClient()
const Stack = createStackNavigator();

export default function App() {

  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )
}

const Details = () => {
  return (
    <Text>
      Details
    </Text>
  )
}

const Home = ( {navigation}: {navigation: any} ) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
