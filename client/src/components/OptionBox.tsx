import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

interface Props {
  item: any
}

const OptionBox: React.FC<Props> = ( {item} ) => {

  const checkAnswer = (correct: boolean) => {
    
  }

  return (
    <Pressable onPress={() => checkAnswer(item.correct)} style={styles.container}>
      <View style={{display: 'flex', flexDirection: 'row', height: 100}}>
        <View style={{backgroundColor: 'red', width: 20, marginLeft: -16}}></View>
        <Text style={styles.buttonText}>{item.ans}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
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
  },
})

export default OptionBox