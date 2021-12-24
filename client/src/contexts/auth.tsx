import React, {createContext, useState, useContext, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthData, authService } from '../services//authentication/authService'
import { apolloClient } from '../utils/apollo-client/apolloClient'

type AuthContextData = {
  authData?: AuthData
  loading: boolean
  signIn(username: string, password: string): Promise<void>
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({children}) => {

  const [authData, setAuthData] = useState<AuthData>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadStorageData()
  }, [])

  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialized = await AsyncStorage.getItem('@AuthData')
      if (authDataSerialized) {
        const _authData: AuthData = JSON.parse(authDataSerialized);
        setAuthData(_authData)
      }
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  const signIn = async (username: string, password: string) => {
    const authData = await authService.signIn(
      username,
      password
    )

    setAuthData(authData)
    apolloClient.resetStore()

    AsyncStorage.setItem('@AuthData', JSON.stringify(authData))
  }

  const signOut = async () => {

    setAuthData(undefined)
    apolloClient.resetStore()

    await AsyncStorage.removeItem('@AuthData')
  }

  return (
    <AuthContext.Provider value={{authData, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export {AuthContext, AuthProvider, useAuth}