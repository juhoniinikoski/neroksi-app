import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home'
import Category from '../pages/Category'
import { AddStack } from './addStack'

const Stack = createStackNavigator()

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={{headerTransparent: true, title: ''}}/>
      <Stack.Screen name='Category' component={Category} options={{headerTransparent: true, title: ''}}/>
    </Stack.Navigator>
  )
}