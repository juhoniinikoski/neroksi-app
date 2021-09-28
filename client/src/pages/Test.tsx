import { useQuery } from "@apollo/client"
import React, { useState } from "react"
import { Alert, Modal, StyleSheet, Text, Pressable, View, SafeAreaView, Dimensions, Button } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import useCategories from "../hooks/useCategories"
import useCategory from "../hooks/useQuestions"

const Test = (  ) => {

  const { categories, loading: categoryLoad, fetchMore: categoryFetchmore } = useCategories("ASC", "")
  console.log(categories)
  const { questions, loading, fetchMore } = useCategory("ASC", "", "pekka.diffis2")
  if (!loading) {
    console.log(questions)
  }

  
  
  return (
    <View>
      <Button title='testi' onPress={fetchMore}></Button>
      <Button title='testi' onPress={categoryFetchmore}></Button>
    </View>
  )
}



export default Test;