import React from 'react'
import { Text, SafeAreaView, StyleSheet, View, FlatList, Pressable } from 'react-native'
import useQuestions from '../hooks/useQuestions'

interface Props {
  navigation: any
  route: any
}

const Category: React.FC<Props> = ( {route, navigation} ) => {

  const id = parseInt(route.params.category.id)

  const { questions, loading } = useQuestions(id)

  const renderItem = ( {item}: {item: any} ) => (
    <Pressable onPress={() => navigation.navigate('Question', {questions: questions, initialScrollID: item.id})} style={styles.container}>
      <Text style={styles.buttonText}>{item.question}</Text>
    </Pressable>
  )

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={questions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
  title: {
    marginTop: 16,
    paddingVertical: 8,
    fontSize: 30,
    fontWeight: "bold"
  },
  buttonText: {
    fontSize: 16
  },
})

export default Category