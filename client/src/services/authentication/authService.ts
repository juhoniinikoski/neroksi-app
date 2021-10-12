import React from "react"
import { apolloClient } from "../../utils/apollo-client/apolloClient"
import { AUTHORIZE } from "../../utils/graphql/mutations"

export type AuthData = {
  token: string
  name: string
}

const signIn = async (username: string, password: string): Promise<AuthData> => {

  const { data } = await apolloClient.mutate({
    mutation: AUTHORIZE,
    variables: {
      username,
      password
    }
  })
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: data.authorize.accessToken,
        name: username,
      })
    }, 1000)
  })
}

export const authService = {
  signIn,
}