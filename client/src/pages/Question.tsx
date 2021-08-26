import React, { useState } from 'react'
import { View, FlatList, StyleSheet, Text, Pressable, Dimensions } from 'react-native'
import OptionBox from '../components/OptionBox'
import QuestionScreen from '../components/QuestionScreen'
import styles from '../styles/styles'

interface Props {
  route: any
}

const Question: React.FC<Props> = ( {route} ) => {
  
  const height = Dimensions.get('screen').height

  const questions: any = route.params.questions
  
  const initialScrollID: number = route.params.initialScrollID

  const renderItem = ( {item}: {item: any} ) => <QuestionScreen item={item}/>

  return (
    <View style={styles.mainContainer}>
      <FlatList
      pagingEnabled={true}
      initialScrollIndex={initialScrollID}
      data={questions}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      getItemLayout={(data: any, index: number) => (
        {length: height, offset: height * index, index}
      )}/>
    </View>
  )
}

const oldStyles = StyleSheet.create({
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

export default Question