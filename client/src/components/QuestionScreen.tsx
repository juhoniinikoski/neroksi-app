import React from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

interface Props {
  item: any
}

const QuestionScreen: React.FC<Props> = ( {item} ) => {

  console.log(item)

  const height = Dimensions.get('screen').height
  const width = Dimensions.get('screen').width

  return (
    <View style={{...styles.scrollItemView, width: width, height: height}}>
      {/* <Text>{item.question}</Text> */}
      <View style={{...styles.scrollItemView, backgroundColor: 'red'}}>
        <Text style={styles.item}>{item.question}</Text>
        {item.answers.map((ans: any) => <Text key={ans.ans}>{ans.ans}</Text>)}
      </View>
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