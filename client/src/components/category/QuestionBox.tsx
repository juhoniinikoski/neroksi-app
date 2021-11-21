import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from '../../styles/styles'
import textStyles from '../../styles/textStyles'
import { FontAwesome5 } from '@expo/vector-icons'

interface Props {
  navigation: any
  item: any
  index: number
  questions: any
  lastIndex: number
  fetchMore: any,
  id: string
}

const QuestionBox: React.FC<Props> = ({item, index, navigation, questions, lastIndex, id}) => {

  const handleCommentPress = () => (
    console.log('painettu kommenttia ' + item.id)
  )

  const handleDotPress = () => (
    console.log('painettu pisteitä ' + item.id)
  )

  return (
    <Pressable
      onPress={() => navigation.navigate('Question', {initialScrollID: index, initialQuestion: questions, id: id, lastIndex})}
      style={index === 0 ? styles.firstQuestion : index === lastIndex ? styles.lastQuestion : styles.question}>
      <Text style={{...textStyles.bodyText, paddingBottom: 16}}>{item.questionTitle}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Pressable onPress={handleCommentPress}>
          <FontAwesome5 name="comment" size={22} color="white" />
        </Pressable>
        <Pressable onPress={handleDotPress} >
          <FontAwesome5 name="ellipsis-v" size={20} color="white" />
        </Pressable>
      </View>
    </Pressable>
  )
}

export default QuestionBox