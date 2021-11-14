import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Add from '../pages/Add'
import { Pressable, View, Text } from 'react-native'
import ConfirmAdd from '../pages/ConfirmAdd'

const Stack = createStackNavigator()

export const AddStack = () => {
  return (
    <Stack.Navigator initialRouteName = 'Add' mode='modal'>
      <Stack.Screen
        name='Add'
        component={mainStack}
        options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

const mainStack = () => {
  return (
    <Stack.Navigator initialRouteName = 'AddQuestions'>
      <Stack.Screen
        name='AddQuestions'
        component={Add}
        options={({ navigation, route }) => ({
          headerTransparent: true,
          title: '',
          headerLeft: () => <BackButton navigation={navigation}/>
        })}/>
      <Stack.Screen
        name='ConfirmAdd'
        component={ConfirmAdd}
        options={({ navigation, route }) => ({
          headerTransparent: true,
          title: '',
          headerLeft: () => <BackButton navigation={navigation}/>
        })}/>
    </Stack.Navigator>
  )
}

interface Props {
  navigation: any
}

const BackButton: React.FC<Props> = ({navigation}) => {

  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Text style={{fontSize: 17, color: 'white', marginLeft: 16}}>Takaisin</Text>
    </Pressable>
  )
}