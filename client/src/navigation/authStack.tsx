import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import SignInScreen from '../pages/SingIn'

const Stack = createStackNavigator()

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  )
}