import React from 'react'
import colors from '../styles/colorStyles'
import {useAuth} from '../contexts/auth'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { View, Text} from 'react-native'
import { AppStack } from './appStack'
import { AuthStack } from './authStack'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background
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