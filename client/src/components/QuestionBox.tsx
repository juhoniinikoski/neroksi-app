import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from '../styles/styles'
import textStyles from '../styles/textStyles'
import { Entypo, FontAwesome5 } from '@expo/vector-icons'

interface Props {
  navigation: any
  item: any
  index: number
  questions: any
  lastIndex: number
  fetchMore: any
}

const QuestionBox: React.FC<Props> = ({item, index, navigation, questions, lastIndex}) => {

  const handleCommentPress = () => (
    console.log('painettu kommenttia ' + item.id)
  )

  const handleDotPress = () => (
    console.log('painettu pisteitä ' + item.id)
  )

  return (
    <Pressable
      onPress={() => navigation.navigate('Question', {questions: questions, initialScrollID: index})}
      style={index === 0 ? styles.firstQuestion : index === lastIndex ? styles.lastQuestion : styles.question}>
      <Text style={{...textStyles.bodyText, paddingBottom: 16}}>{item.questionTitle}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Pressable onPress={handleCommentPress}>
          <FontAwesome5 name="comment" size={22} color="white" />
        </Pressable>
        <Pressable onPress={handleDotPress} >
          <Entypo name="dots-two-vertical" size={24} color="white" />
        </Pressable>
      </View>
    </Pressable>
  )
}

export default QuestionBox