import React from 'react'
import { TextInput as NativeTextInput } from 'react-native'

interface Props {
  style: any
  multiline: boolean
  placeholder: string
  placeholderTextColor: string
  onChangeText: (value: string) => void
  onBlur: () => void
  value: string
  error: string | false | undefined
  secureTextEntry: boolean
  autoFocus: boolean
}

const TextInput: React.FC<Props> = ({ style, multiline, placeholder, ...props }) => {

  return <NativeTextInput 
    autoCorrect={false}
    autoCapitalize='none'
    style={style}
    placeholder={placeholder}
    {...props}
    multiline={multiline} />
  
}

export default TextInput