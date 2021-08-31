import { useQuery } from "@apollo/client"
import React, { useState } from "react"
import { Alert, Modal, StyleSheet, Text, Pressable, View, SafeAreaView, Dimensions } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { GET_CATEGORIES } from "../utils/graphql/quories"

const Test = (  ) => {

  const { data } = useQuery(GET_CATEGORIES)
  console.log(data)

  
  return (
    <View></View>
  )
}

const styles = StyleSheet.create({
  scrollItemView: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Test;