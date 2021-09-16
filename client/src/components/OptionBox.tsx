import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import colors from '../styles/colorStyles'
import styles from '../styles/styles'
import textStyles from '../styles/textStyles'
import { FontAwesome5 } from '@expo/vector-icons'

interface Props {
  item: any
}

interface Scroll {
  x: number
  y: number
  animated: boolean
}

const OptionBox: React.FC<Props> = ( {item} ) => {

  const [selected, setSelected] = useState<number|null>(null)
  const [icon, setIcon] = useState<string|null>(null)

  // lisätään funktio, joka tyhjentää selectedin, kun kyseinen sivu poistuu näkyvistä

  const checkAnswer = (item: {correct: boolean, id: number}) => {
    setSelected(item.id)
    if (!item.correct) {
      setTimeout(() => setSelected(null), 1500)
      setIcon('times')
      setTimeout(() => setIcon(null), 1500)
    } else {
      setIcon('check')
    }
  }

  return (
    <View style={{ justifyContent: 'center', alignSelf: 'stretch'}}>
      <View style={icon === 'check' ? styles.checkIcon : {...styles.checkIcon, paddingRight: 10}}>
        <FontAwesome5 name={icon} size={32} color={icon === 'check' ? 'green' : 'red'}/>
      </View>
      <Pressable onPress={() => checkAnswer(item)} style={item.id === selected ? {...styles.questionBox, backgroundColor: 'white'} : styles.questionBox}>
        <View>
          <Text style={item.id === selected ? {...textStyles.bodyText, color: colors.background} : textStyles.bodyText}>{item.ans}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default OptionBox