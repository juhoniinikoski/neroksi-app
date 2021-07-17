import React, { useEffect } from "react"
import { View, Text, Pressable, StyleSheet, SafeAreaView, FlatList } from "react-native"
import { useQuery } from '@apollo/client';
import { GET_ALL_CATEGORIES, GET_QUESTIONS } from '../utils/graphql/quories'
import useCategories from "../hooks/useCategories"
import useQuestions from "../hooks/useQuestions"

interface Props {
  navigation: any
}

const Home: React.FC<Props> = ( {navigation} ) => {

  const { categories, loading } = useCategories()

  const renderItem = ( {item}: {item: any} ) => (
    <Pressable onPress={() => navigation.navigate('Category', {category: item})} style={styles.container}>
      <Text style={styles.buttonText}>{item.name}</Text>
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
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{alignSelf: 'stretch', marginTop: 4}}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 16,
    marginHorizontal: 8,
    marginVertical: 4,
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

export default Home