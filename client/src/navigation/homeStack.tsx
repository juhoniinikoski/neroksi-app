import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home'
import Category from '../pages/Category'
import BackButton from '../components/common/BackButton'
import { AddStack } from './addStack'

const Stack = createStackNavigator()

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={{title: '', headerTransparent: true}}/>
      <Stack.Screen
        name='Category'
        component={Category}
        options={({ navigation, route }) => ({
          headerTransparent: true,
          title: '',
          headerLeft: () => <BackButton navigation={navigation}/>
        })}/>
    </Stack.Navigator>
  )
}

export type HomeStackParamList = {
  Category: {category: any}
}