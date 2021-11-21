import React from 'react'
import { Pressable, Text } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'


interface Props {
  navigation: any
}
  
const BackButton: React.FC<Props> = ({navigation}) => {

  return (
    <Pressable style={{marginLeft: 16}} onPress={() => navigation.goBack()}>
      <FontAwesome5 name="arrow-left" size={24} color="white" />
    </Pressable>
  )
}

export default BackButton