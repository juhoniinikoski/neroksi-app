import React from "react"
import { Text, SafeAreaView, StyleSheet, View, Pressable } from 'react-native'
import { useQuery } from '@apollo/client'
import { GET_CATEGORY } from '../utils/graphql/quories'

const Category = ( {route, navigation}: {route: any, navigation: any} ) => {

  const id = parseInt(route.params.category.id)

  const { data, error, loading } = useQuery(GET_CATEGORY, { variables: {id: id} })
  const items = loading ? null : data.findCategory.items

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </View>
    )
  }
  console.log(data.findCategory)

  console.log(items)

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>
        {route.params.category.name}
      </Text>
      {items.map((i: any) => <Pressable key={i.id} onPress={() => navigation.navigate('Question', {question: i})} style={styles.container}>
          <Text style={styles.buttonText}>{i.question}</Text>
        </Pressable>)}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
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