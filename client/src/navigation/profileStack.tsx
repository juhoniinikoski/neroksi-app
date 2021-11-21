import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../pages/Profile'

const Stack = createStackNavigator()


export const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName='Profile'>
      <Stack.Screen name='Profile' component={Profile} options={{headerTransparent: true, title: ''}}/>
    </Stack.Navigator>
  )
}