import React, { useState } from "react"
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, Pressable } from "react-native"
import { GET_QUESTIONS } from "../utils/graphql/quories"
import { useQuery } from '@apollo/client'

const Question = ( {route}: {route: any} ) => {

  const questionName = route.params.question.question
  const questionID = route.params.question.id
  const answers = route.params.question.answers

  const [selectedId, setSelectedId] = useState(null)

  const renderItem = ({ item }) => {

    return (
      <Pressable onPress={() => console.log('painettu')} style={styles.container}>
        <Text style={styles.buttonText}>{item.ans}</Text>
      </Pressable>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={answers}
        renderItem={renderItem}
        keyExtractor={(answer) => answer.id}
        extraData={selectedId}
        style={{alignSelf: 'stretch', marginTop: 4}}
      />
    </SafeAreaView>
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

export default Question