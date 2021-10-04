import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeStack } from "./homeStack"
import { ProfileStack } from "./profileStack"
import { FontAwesome5 } from '@expo/vector-icons'
import { View } from "react-native"
import BottomNavBar from "../components/BottomNavBar"


const Tabs = createBottomTabNavigator()

// extract styles for tabBar for cleaner code
// check ways to make navigation simpler

export const TabNav = () => (
  <Tabs.Navigator 
  tabBar={props => <BottomNavBar {...props}  />}
  tabBarOptions={{
    style: {
      borderTopWidth: 0,
      backgroundColor: '',
      elevation: 0, // this solved the triangle type view problem in android
      position: "absolute"
    },
  }}
  >
    <Tabs.Screen name="Home" component={HomeStack}/>
    <Tabs.Screen name="Profile" component={ProfileStack}/>
  </Tabs.Navigator>
)