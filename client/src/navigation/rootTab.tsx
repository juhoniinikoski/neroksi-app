import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeStack } from "./homeStack"
import { ProfileStack } from './profileStack'
import BottomNavBar from '../components/BottomNavBar'


const Tabs = createBottomTabNavigator()

// extract styles for tabBar for cleaner code
// check ways to make navigation simpler

export const TabNav = () => (
  <Tabs.Navigator tabBar={props => <BottomNavBar {...props}  />}>
    <Tabs.Screen name="Home" component={HomeStack}/>
    <Tabs.Screen name="Profile" component={ProfileStack}/>
  </Tabs.Navigator>
)