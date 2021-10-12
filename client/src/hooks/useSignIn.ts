import { useContext } from "react"
import { useMutation, useApolloClient } from '@apollo/client'
import { AUTHORIZE } from '../utils/graphql/mutations'
import AuthStorageContext from "../contexts/authStorageContext"

interface AuthProps {
  username: string
  password: string
}

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);

  const signIn = async ({ username, password }: AuthProps) => {
    const payload = await mutate({ variables: { username, password } });
    const { data } = payload;

    // if (data && data.authorize) {
    //   await authStorage.setAccessToken(data.authorize.accessToken);
    //   apolloClient.resetStore();
    // }

    return payload;
  }

  return [signIn, result]
}

export default useSignIn