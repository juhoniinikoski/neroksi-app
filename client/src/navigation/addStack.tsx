import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Add from '../pages/Add'

const Stack = createStackNavigator()

export const AddStack = () => {
  return (
    <Stack.Navigator initialRouteName = 'AddQuestions' mode='modal'>
      <Stack.Screen name='AddQuestions' component={Add} options={{headerTransparent: true, title: '', cardStyle: { backgroundColor: "transparent" }}}/>
    </Stack.Navigator>
  )
}