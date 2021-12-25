import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeStack } from "./homeStack"
import { ProfileStack } from './profileStack'
import colors, { themeColors } from '../styles/colorsStyles'
import { Entypo, FontAwesome } from '@expo/vector-icons'

const Tabs = createBottomTabNavigator()

export const TabNav = () => (
  <Tabs.Navigator 
    screenOptions={{
      "tabBarShowLabel": false,
      "headerShown": false,
      "tabBarStyle": [
        {
          "display": "flex",
          "backgroundColor": themeColors.primaryBackground,
          "borderTopWidth": 0,
          "elevation": 0
        }
      ]
    }}>
    <Tabs.Screen
      name="HomeStack"
      component={HomeStack}
      options={{
        tabBarIcon: ({ focused }) => <Entypo name="home" size={24} color={focused ? 'white' : colors.disabled}/>,
        title: ''
      }}/>
    <Tabs.Screen
      name="ProfileStack"
      component={ProfileStack}
      options={{
        tabBarIcon: ({ focused }) => <FontAwesome name="user" size={24} color={focused ? 'white' : colors.disabled}/>
      }}/>
  </Tabs.Navigator>
)