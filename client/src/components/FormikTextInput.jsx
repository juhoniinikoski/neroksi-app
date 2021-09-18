import React from 'react'
import { useField } from 'formik'
import { Text } from 'react-native'
import TextInput from './TextInput'
import styles from '../styles/styles'

const FormikTextInput = ({ name, style, placeholder, ...props }) => {

  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  const notMultiline = ['category', 'password', 'email', 'username']

  return (
    <>
      <TextInput
        placeholder={placeholder}
        style={style}
        multiline={notMultiline.find(name => name) ? false : true}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        secureTextEntry={name === 'password' ? true : false}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
}

export default FormikTextInput;