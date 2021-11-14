import React from 'react'
import { TextInput as NativeTextInput } from 'react-native'

const TextInput= ({ style, multiline, placeholder, ...props }) => {

  return <NativeTextInput 
    autoCorrect={false}
    autoCapitalize='none'
    style={style}
    placeholder={placeholder}
    {...props}
    multiline={multiline} />
  
}

export default TextInput