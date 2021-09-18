import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Question from '../pages/Question'
import { TabNav } from './rootTab'
import SignInScreen from '../pages/SingIn'
import Register from '../pages/Register'

const Stack = createStackNavigator()

export const RootStack = (userToken: any) => {

  console.log(userToken)

  return (
    <Stack.Navigator>
      {userToken.userToken == null ? (
        <>
          {/* <Stack.Screen name="SignIn" component={SignInScreen} /> */}
          <Stack.Screen name="Register" component={Register} options={{headerTransparent: true, title: ''}}/>
          {/* <Stack.Screen name="ResetPassword" component={ResetPassword} /> */}
        </>
      ) : (
        <>
          <Stack.Screen name='Home' component={TabNav} options={{headerShown: false}}/>
          <Stack.Screen name='Question' component={Question} options={{headerShown: false}}/>
        </>
      )}
    </Stack.Navigator>
  )
}