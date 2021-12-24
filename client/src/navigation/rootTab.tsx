import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeStack } from "./homeStack"
import { ProfileStack } from './profileStack'
import colors, { themeColors } from '../styles/colorStyles'
import { Entypo, FontAwesome } from '@expo/vector-icons'

const Tabs = createBottomTabNavigator()

export const TabNav = () => (
  <Tabs.Navigator 
    tabBarOptions={{
      style: {
        backgroundColor: themeColors.primaryBackground,
        borderTopWidth: 0,
        elevation: 0
      },
      showLabel: false
    }}>
    <Tabs.Screen
      name="Home"
      component={HomeStack}
      options={{
        tabBarIcon: ({ focused }) => <Entypo name="home" size={24} color={focused ? 'white' : colors.disabled}/>
      }}/>
    <Tabs.Screen
      name="Profile"
      component={ProfileStack}
      options={{
        tabBarIcon: ({ focused }) => <FontAwesome name="user" size={24} color={focused ? 'white' : colors.disabled}/>
      }}/>
  </Tabs.Navigator>
)