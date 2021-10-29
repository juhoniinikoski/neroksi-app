import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Add from '../pages/Add'
import { Pressable, View, Text } from 'react-native'

const Stack = createStackNavigator()

export const AddStack = () => {
  return (
    <Stack.Navigator initialRouteName = 'AddQuestions' mode='modal'>
      <Stack.Screen
      name='AddQuestions'
      component={Add}
      options={({ navigation, route }) => ({
        headerTransparent: true,
        title: '',
        headerLeft: () => <BackButton navigation={navigation}/>,
        headerRight: () => <NextButton/>,
        cardStyle: { backgroundColor: "transparent" }
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
      <Text style={{fontSize: 17, color: 'white', marginLeft: 20}}>Takaisin</Text>
    </Pressable>
  )
}

const NextButton = () => {
  return (
    <Pressable onPress={() => console.log('seuraava')}>
      <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white', marginRight: 20}}>Seuraava</Text>
    </Pressable>
  )
}