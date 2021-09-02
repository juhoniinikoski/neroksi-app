import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import colors from '../styles/colorStyles'
import AddQuestion from '../pages/AddQuestion'

const Stack = createStackNavigator()

export const ProfileStack = () => {
  return (
    <SafeAreaProvider style={{ backgroundColor: colors.background }}>
      <Stack.Navigator initialRouteName='Profile'>
        <Stack.Screen name='Add' component={AddQuestion} options={{headerTransparent: true, title: ''}}/>
      </Stack.Navigator>
    </SafeAreaProvider>
  )
}