import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Profile from '../pages/Profile'
import colors from '../styles/colorStyles'

const Stack = createStackNavigator()

export const ProfileStack = () => {
  return (
    <SafeAreaProvider style={{ backgroundColor: colors.background }}>
      <Stack.Navigator initialRouteName='Profile'>
        <Stack.Screen name='Profile' component={Profile} options={{headerTransparent: true, title: ''}}/>
      </Stack.Navigator>
    </SafeAreaProvider>
  )
}