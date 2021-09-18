import React from 'react'
import { View, Button, TextInput } from 'react-native'
import { useAuthContext } from '../contexts/authContext'
import styles from '../styles/styles'

function SignInScreen() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
  
    const { signIn } = useAuthContext()
  
    return (
      <View style={{...styles.mainContainer, justifyContent: 'flex-start'}}>
        <TextInput
          placeholder="Username"
          value={username}
          // tyle={{height: 40, backgroundColor: 'white'}}
          style={styles.signInForm}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          value={password}
          style={styles.signInForm}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign in" onPress={() => signIn({ username, password })} />
      </View>
    )
}

export default SignInScreen