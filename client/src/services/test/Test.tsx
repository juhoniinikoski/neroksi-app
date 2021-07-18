import React from "react"
import { View, Text, Pressable, StyleSheet } from "react-native"
import { useQuery } from '@apollo/client'
import { GET_ALL_CATEGORIES, GET_CATEGORY } from "../../utils/graphql/quories"

const Test = ( {navigation}: {navigation: any} ) => {

  const { data } = useQuery(GET_CATEGORY, { variables: {id: 1}})

  data ? console.log(data) : console.log('')

  return (
    <View />
  )
}

export default Test