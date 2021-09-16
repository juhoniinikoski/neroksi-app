import React from 'react'
import { View, Button, TextInput } from 'react-native'
import { useAuthContext } from '../contexts/authContext'

function SignInScreen() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
  
    const { signIn } = useAuthContext()
  
    return (
      <View>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign in" onPress={() => signIn({ username, password })} />
      </View>
    )
}

export default SignInScreen