import React, { useState } from 'react'
import { View, Pressable, Text, Switch } from 'react-native'
import { useField } from 'formik'
import FormikTextInput from '../components/FormikTextInput'
import styles from '../styles/styles'
import textStyles from '../styles/textStyles'
import { FontAwesome5 } from '@expo/vector-icons'
import colors from '../styles/colorStyles'

interface Props {
  onSubmit: () => void
}

const RegisterForm: React.FC<Props> = ({ onSubmit }) => {


  return (
    <View>
      <FormikTextInput name='username' style={styles.registerForm} placeholder='Käyttäjänimi'/>
      <FormikTextInput name='email' style={styles.registerForm} placeholder='Sähköposti'/>
      <FormikTextInput name='password' style={styles.registerForm} placeholder='Salasana'/>
      <Pressable onPress={onSubmit} style={styles.submitButton}>
        <Text style={textStyles.subTitle}>Rekisteröidy</Text>
      </Pressable>
    </View>
  )
}

export default RegisterForm