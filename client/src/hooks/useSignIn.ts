import React, { useContext } from 'react'
import { useMutation, useApolloClient } from '@apollo/client'
import { AUTHORIZE } from '../utils/graphql/mutations'

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE)
  const apolloClient = useApolloClient()
  // const authStorage = useContext(AuthStorageContext)

  interface SingInProps {
    username: string
    password: string
    setAccesToken: any
  }

  const signIn = async ({ username, password } : SingInProps) => {
    const payload = await mutate({ variables: { username, password } })
    const { data } = payload

    console.log(data)

    // if (data && data.authorize) {
    //   await authStorage.setAccessToken(data.authorize.accessToken)
    //   apolloClient.resetStore()
    // }

    return payload
  }

  return [signIn, result]
}

export default useSignIn