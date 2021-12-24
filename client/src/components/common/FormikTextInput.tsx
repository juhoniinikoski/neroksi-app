import React from 'react'
import { useField } from 'formik'
import { Text } from 'react-native'
import TextInput from './TextInput'
import textStyles from '../../styles/textStyles'

interface Props {
  name: string
  style: any
  placeholder: string
  color: string
}

const FormikTextInput: React.FC<Props> = ({ name, style, placeholder, color, ...props }) => {

  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  const notMultiline = ['category', 'password', 'email', 'username']

  return (
    <>
      <TextInput
        placeholderTextColor={color}
        placeholder={placeholder}
        style={style}
        multiline={notMultiline.find(n => n == name) ? false : true}
        onChangeText={(value: any) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value || ''}
        error={showError}
        secureTextEntry={name === 'password' ? true : false}
        autoFocus={name === 'question' ? true : false}
        {...props}
      />
      {showError && <Text style={textStyles.bodyText}>{meta.error}</Text>}
    </>
  )
}

export default FormikTextInput;