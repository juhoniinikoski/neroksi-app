import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { TabNav } from './rootTab'
import Question from '../pages/Question'
import { AddStack } from './addStack'

const Stack = createStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={TabNav} options={{headerShown: false}}/>
      <Stack.Screen name='Question' component={Question} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName='Main' mode='modal' screenOptions={{}}>
      <Stack.Screen name='Main' component={MainStack} options={{headerShown: false}}/>
      <Stack.Screen name='Add' component={AddStack} options={{headerShown: false, cardStyle: { backgroundColor: "transparent" }}}/>
    </Stack.Navigator>
  )
}