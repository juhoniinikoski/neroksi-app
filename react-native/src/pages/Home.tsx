import React from "react"
import { View, Text, Pressable, StyleSheet } from "react-native"
import { useQuery } from '@apollo/client';
import { GET_ALL_CATEGORIES } from '../utils/graphql/quories'

const Home = ( {navigation}: {navigation: any} ) => {

  const { data, error, loading } = useQuery(GET_ALL_CATEGORIES)

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>Home Screen</Text>
      {data.allCategories.map((c: any) => 
        <Pressable key={c.id} onPress={() => navigation.navigate('Category', {category: c})} style={styles.container}>
          <Text style={styles.buttonText}>{c.name}</Text>
        </Pressable>
      )}
    </View>
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

export default Home