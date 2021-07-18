import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeStack } from "./stackNav"
import Profile from "../pages/Profile"
import Test from "../pages/Test"

const Tabs = createBottomTabNavigator()

export const TabNav = () => (
  <Tabs.Navigator>
    {/* <Tabs.Screen name="Test" component={Test} /> */}
    <Tabs.Screen name="Home" component={HomeStack} />
    <Tabs.Screen name="Profile" component={Profile} />
  </Tabs.Navigator>
)