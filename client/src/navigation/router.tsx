import React from 'react'
import { themeColors } from '../styles/colorStyles'
import {useAuth} from '../contexts/auth'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { View, Text} from 'react-native'
import { AppStack } from './appStack'
import { AuthStack } from './authStack'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: themeColors.primaryBackground
  },
}

export const Router = () => {

  const {authData, loading} = useAuth()
  // console.log(authData)

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <NavigationContainer theme={theme}>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};