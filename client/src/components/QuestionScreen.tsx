import React from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import textStyles from '../styles/textStyles'
import OptionBox from './OptionBox'
import styles from '../styles/styles'

interface Props {
  item: any
}

const QuestionScreen: React.FC<Props> = ( {item} ) => {

  const height = Dimensions.get('screen').height

  return (
    <View style={{...styles.scrollItemView, height: height}}>
      <Text style={{...textStyles.subTitle, marginBottom: 24}}>{item.questionTitle}</Text>
      {item.answers.map((ans: any) => <OptionBox key={ans.id} item={ans}/>)}
    </View>
  )
}

export default QuestionScreen