import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeStack } from "./homeStack"
import { ProfileStack } from "./profileStack"
import { FontAwesome5 } from '@expo/vector-icons'
import { View } from "react-native"

const Tabs = createBottomTabNavigator()

// extract styles for tabBar for cleaner code
// check ways to make navigation simpler

export const TabNav = () => (
  <Tabs.Navigator
    tabBarOptions={{
      showLabel: false,
      safeAreaInsets: {bottom: 0, top: 0},
      style: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 35,
        height: 64,
        borderRadius: 50,
        marginHorizontal: 64,
        alignItems: 'center',
        justifyContent: 'center'
      }
    }}>
    {/* <Tabs.Screen name="Test" component={Test} /> */}
    <Tabs.Screen
      name="Home"
      component={HomeStack}
      options={{tabBarIcon: () => <View style={{backgroundColor: 'red', height: 25, width: 25}}></View>}}/>
    <Tabs.Screen
      name="Profile"
      component={ProfileStack}
      options={{tabBarIcon: () => <View style={{backgroundColor: 'red', height: 25, width: 25}}></View>}}/>
  </Tabs.Navigator>
)