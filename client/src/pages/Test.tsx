import { isNetworkRequestInFlight } from "@apollo/client/core/networkStatus";
import { Verify } from "crypto";
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, SafeAreaView, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler"

const Test = ( props: any ) => {

  const scrollIndex: number = parseInt(props.route.params.question.id)

  const array = [
    {
      "id": 1,
      "color": "red"
    },
    {
      "id": 2,
      "color": "blue"
    },
    {
      "id": 3,
      "color": "green"
    },
    {
      "id": 4,
      "color": "white"
    },
    {
      "id": 5,
      "color": "grey"
    },
    {
      "id": 6,
      "color": "violet"
    },
    {
      "id": 7,
      "color": "yellow"
    },
  ]

  const height = Dimensions.get('screen').height
  const width = Dimensions.get('screen').width

  const renderItem = ( {item}: {item: any} ) => {

    return (
      <View style={{...styles.scrollItemView, backgroundColor: item.color, width: width, height: height}}>
        <Text>{item.id}</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
      pagingEnabled={true}
      initialScrollIndex={scrollIndex}
      data={array}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      getItemLayout={(data: any, index: number) => (
        {length: height, offset: height * index, index}
      )}/>
    </View>
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