import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Question from '../pages/Question'
import Test from '../pages/Test'
import { TabNav } from './rootTabNav'

const Stack = createStackNavigator()

export const RootStack = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={TabNav} options={{headerShown: false}}/>
        <Stack.Screen name='Question' component={Question} options={{headerShown: false}}/>
      </Stack.Navigator>
    </SafeAreaProvider>
  )
}

export const HomeStack = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Category' component={Category} />
      </Stack.Navigator>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});