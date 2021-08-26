import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Home from '../pages/Home'
import Category from '../pages/Category'
import colors from '../styles/colorStyles'

const Stack = createStackNavigator()

export const HomeStack = () => {
  return (
    <SafeAreaProvider style={{ backgroundColor: colors.background }}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{headerTransparent: true, title: ''}}/>
        <Stack.Screen name='Category' component={Category} options={{headerTransparent: true, title: ''}}/>
      </Stack.Navigator>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})