import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Question from '../pages/Question'
import { TabNav } from './rootTab'
import colors from '../styles/colorStyles'

const Stack = createStackNavigator()

export const RootStack = () => {
  return (
    <SafeAreaProvider style={{ backgroundColor: colors.background }}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={TabNav} options={{headerShown: false}}/>
        <Stack.Screen name='Question' component={Question} options={{headerShown: false}}/>
      </Stack.Navigator>
    </SafeAreaProvider>
  )
}