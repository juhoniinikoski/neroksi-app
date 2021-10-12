import React from 'react'
import { View, Button, TextInput } from 'react-native'
import styles from '../styles/styles'
import {useAuth} from '../contexts/auth'

function SignInScreen() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const [loading, isLoading] = React.useState(false)
  
    // const { signIn } = useAuthContext()

    const auth = useAuth()

    const signIn = async () => {
      isLoading(true);
      await auth.signIn(username, password);
    }
  
    return (
      <View style={{...styles.mainContainer, justifyContent: 'flex-start'}}>
        <TextInput
          placeholder="Username"
          autoCapitalize='none'
          value={username}
          // tyle={{height: 40, backgroundColor: 'white'}}
          style={styles.signInForm}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          autoCapitalize='none'
          value={password}
          style={styles.signInForm}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign in" onPress={() => signIn()} />
        {/* <Button title="Sign in" onPress={() => signIn({ username, password })} /> */}
      </View>
    )
}

export default SignInScreen