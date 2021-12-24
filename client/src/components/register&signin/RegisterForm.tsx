import React from 'react'
import { View, Pressable, Text } from 'react-native'
import FormikTextInput from '../common/FormikTextInput'
import styles from '../../styles/styles'
import textStyles from '../../styles/textStyles'

interface Props {
  onSubmit: () => void
}

const RegisterForm: React.FC<Props> = ({ onSubmit }) => {


  return (
    <View>
      <FormikTextInput name='username' style={styles.registerForm} placeholder='Käyttäjänimi' color='white'/>
      <FormikTextInput name='email' style={styles.registerForm} placeholder='Sähköposti' color='white'/>
      <FormikTextInput name='password' style={styles.registerForm} placeholder='Salasana' color='white'/>
      <Pressable onPress={onSubmit} style={styles.submitButton}>
        <Text style={textStyles.subTitle}>Rekisteröidy</Text>
      </Pressable>
    </View>
  )
}

export default RegisterForm