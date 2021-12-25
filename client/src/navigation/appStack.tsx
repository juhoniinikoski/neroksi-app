import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { TabNav } from './rootTab'
import Question from '../pages/Question'
import BackButton from '../components/common/BackButton'
import { AddStack } from './addStack'

const Stack = createStackNavigator()

export const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName='HomeTab'>
      <Stack.Screen name='HomeTab' component={TabNav} options={{headerShown: false}}/>
      <Stack.Screen name='AddStack' component={AddStack} options={{headerShown: false, title: '', cardStyle: { backgroundColor: "transparent" }, presentation: 'modal'}}/>
      <Stack.Screen name='Question'
        component={Question}
        options={({ navigation, route }) => ({
          headerTransparent: true,
          title: '',
          headerLeft: () => <BackButton navigation={navigation}/>
        })}
      />
    </Stack.Navigator>
  )
}