import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import styles from '../styles/styles'
import textStyles from '../styles/textStyles'

interface Props {
  item: any
}

interface Scroll {
  x: number
  y: number
  animated: boolean
}

const OptionBox: React.FC<Props> = ( {item} ) => {

  const checkAnswer = (correct: boolean) => {
    if (correct) {
      console.log('oikein')
      
    }
  }

  return (
    <Pressable onPress={() => checkAnswer(item.correct)} style={styles.questionBox}>
      <View>
        <Text style={textStyles.bodyText}>{item.ans}</Text>
      </View>
    </Pressable>
  )
}

export default OptionBox