import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import colors from '../../styles/colorStyles'
import styles from '../../styles/styles'
import textStyles from '../../styles/textStyles'
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

interface Props {
  item: any
  index: number
  scroll: any
  lastIndex: number
}

const OptionBox: React.FC<Props> = ( {item, index, scroll, lastIndex} ) => {

  const [selected, setSelected] = useState<number|null>(null)
  const [icon, setIcon] = useState<string|null>(null)

  const navigation = useNavigation()

  // lisätään funktio, joka tyhjentää selectedin, kun kyseinen sivu poistuu näkyvistä

  const checkAnswer = (item: {correct: boolean, id: number}) => {
    setSelected(item.id)
    if (!item.correct) {
      setTimeout(() => setSelected(null), 1500)
      setIcon('times')
      setTimeout(() => setIcon(null), 1500)
    } else {
      setIcon('check')
      setTimeout(() => {
        if (index !== lastIndex) {
          scroll(index + 1)
        } else {
          navigation.goBack()
        }
      }, 1000)
    }
  }

  return (
    <View style={{ justifyContent: 'center', alignSelf: 'stretch'}}>
      <View style={icon === 'check' ? styles.checkIcon : {...styles.checkIcon, paddingRight: 10}}>
        <FontAwesome5 name={icon} size={32} color={icon === 'check' ? 'green' : 'red'}/>
      </View>
      <Pressable onPress={() => checkAnswer(item)} style={item.id === selected ? {...styles.questionBox, backgroundColor: 'white'} : styles.questionBox}>
        <View>
          <Text style={item.id === selected ? {...textStyles.bodyText, color: colors.background} : textStyles.bodyText}>{item.answer}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default OptionBox