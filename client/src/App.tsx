import React from 'react'
import { ApolloProvider } from '@apollo/client'
import createApolloClient from './utils/apollo-client/apolloClient'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { RootStack } from './navigation/rootStack'
import colors from './styles/colorStyles'
import { View } from 'react-native'
import { AuthContext } from './contexts/authContext'
import * as SecureStore from 'expo-secure-store'
import { authReducer } from './contexts/authContext'

const apolloClient = createApolloClient()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background
  },
}

export default function App() {

  const [state, dispatch] = React.useReducer(
    authReducer, { isLoading: true, isSignout: false, userToken: null }
  )

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data: any) => {
        console.log(data)
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data: any) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  )

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <AuthContext.Provider value={authContext}>
        <ApolloProvider client={apolloClient}>
          <NavigationContainer theme={theme}>
            <RootStack userToken={state.userToken}/>
          </NavigationContainer>
        </ApolloProvider>
      </AuthContext.Provider>
    </View>
  )
}