import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { TabNav } from './rootTab'
import Question from '../pages/Question'

const Stack = createStackNavigator()

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={TabNav} options={{headerShown: false}}/>
      <Stack.Screen name='Question' component={Question} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}