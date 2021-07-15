import React, { useState } from "react"
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native"
import { GET_QUESTIONS } from "../utils/graphql/quories"
import { useQuery } from '@apollo/client'

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
]

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
)

const Question = ( {route}: {route: any} ) => {
  
  console.log(route.params.question.question)

  const questionName = route.params.question.question
  const questionID = route.params.question.id
  const answers = route.params.question.answers

  const [selectedId, setSelectedId] = useState(null)

  const renderItem = ({ item }) => {

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
      />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 16,
    alignSelf: 'stretch',
    margin: 8,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 24,
  },
})

export default Question