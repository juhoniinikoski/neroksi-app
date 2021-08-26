import React from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import textStyles from '../styles/textStyles'
import OptionBox from './OptionBox'

interface Props {
  item: any
}

const QuestionScreen: React.FC<Props> = ( {item} ) => {

  const height = Dimensions.get('screen').height

  return (
    <View style={{...styles.scrollItemView, height: height}}>
      <Text style={{...textStyles.subTitle, marginBottom: 24}}>{item.questionTitle}</Text>
      {item.answers.map((ans: any) => <OptionBox key={ans.ans} item={ans}/>)}
    </View>
  )
}

const styles = StyleSheet.create({
  scrollItemView: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    height: 100,
    justifyContent: 'center',
    padding: 16,
    alignSelf: 'stretch',
    margin: 8,
    backgroundColor: 'white'
  },
  item: {
    padding: 16,
    alignSelf: 'stretch',
    marginVertical: 4,
    marginHorizontal: 8,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 24,
  },
  buttonText: {
    fontSize: 16
  }
})

export default QuestionScreen