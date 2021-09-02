import React from 'react'
import { useField } from 'formik'
import { Text } from 'react-native'
import TextInput from './TextInput'
import styles from '../styles/styles'

const FormikTextInput = ({ name, style, placeholder, ...props }) => {

  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <>
      <TextInput
        placeholder={placeholder}
        style={style}
        multiline={name === 'category' ? false : true}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
}

// const FormikTextInput = ({ name, ...props }) => {
//   const [field, meta, helpers] = useField(name)
//   const showError = meta.touched && meta.error

//   if (name === 'question') {
//     return (
//       <TextInput autoCapitalize='none' autoCorrect={false} placeholder='Etsi lisää...' style={{...styles.questionForm}} multiline={true}></TextInput>
//     )
//   }

//   return (
//     <TextInput autoCapitalize='none' autoCorrect={false} placeholder='Etsi lisää...' style={{...styles.searchBar, height: 100}}></TextInput>
//   )
// }

export default FormikTextInput;