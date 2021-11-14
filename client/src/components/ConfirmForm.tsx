import React, { useState } from 'react'
import { View, Pressable, Text, Switch, Button, TextInput, FlatList } from 'react-native'
import { useField } from 'formik'
import FormikTextInput from '../components/FormikTextInput'
import styles from '../styles/styles'
import textStyles from '../styles/textStyles'
import { Entypo } from '@expo/vector-icons'
import colors, { themeColors } from '../styles/colorStyles'
import useUserCategories from '../hooks/useUserCategories'
import useCategories from '../hooks/useCategories'
import { useNavigation } from '@react-navigation/native'

interface Props {
    onSubmit: () => void
    setFieldValue: any
    values: any
}

const QuestionForm: React.FC<Props> = ({ onSubmit, values, setFieldValue }) => {

    const [correctField, correctMeta, correctHelpers] = useField('correct')
    const [privateField, privateMeta, privateHelpers] = useField('private')

    const [selected, setSelected] = useState<number|null>(null)
    const [disabled, setDisabled] = useState<boolean>(true)
    const [privateQ, setPrivateQ] = useState<boolean>(false)

    const navigation = useNavigation()

    const setPrivacy = () => {
      privateHelpers.setValue(!values.private)
      setPrivateQ(!privateQ)
    }

    const setCategory = (index: number) => {
      if (selected === index) {
        setSelected(null)
        correctHelpers.setValue('')
      } else {
        setSelected(index)
        correctHelpers.setValue(index)
      }
    }

    React.useEffect(() => {
      setDisabled(values.correct === '')
    }, [values])

    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <Pressable onPress={setPrivacy} style={{marginRight: 16}}>
            {privateQ ? 
              <Entypo name="lock" size={20} color='white'/> :
              <Entypo name="lock-open" size={20} color='white'/>
            }
          </Pressable>
        ),
      })
    }, [navigation, privateQ])

    const RenderItem = ( {answer, index}: {answer: any, index: number} ) => {
  
      return (
        <Pressable
          onPress={() => setCategory(index)}
          style={{...styles.answerForm, backgroundColor: selected === index ? 'white' : themeColors.primaryBackground}}>
          <Text style={{...textStyles.bodyText, color: index === selected ? themeColors.primaryBackground : 'white'}}>{answer}</Text>
        </Pressable>
      )
    }

    const SeparatorItem = () => (
      <View style={{...styles.separator, alignSelf: 'stretch', justifyContent: 'flex-start'}}/>
    )
  
    return (
      <View>
        <Text style={{...textStyles.questionText, marginTop: 24}}>{values.question}</Text>
        <Text style={{fontSize: 14, color: colors.disabled, marginTop: 36, marginBottom: 12}}>Valitse oikea ratkaisuvaihtoehto painamalla</Text>
        {values.answers.map((a: any, index: number) => <RenderItem answer={a} index={index} key={index}/>)}
        <Pressable onPress={onSubmit} style={{alignItems: 'center', marginTop: 16}} disabled={disabled}>
          <Text style={{fontSize: 24, color: disabled ? themeColors.primaryLight : 'white'}}>Julkaise</Text>
        </Pressable>
        <View style={{alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 8, marginBottom: 24}}>
            <Text style={{fontSize: 10, marginRight: 4}}>📎</Text>
            <Text style={{fontSize: 14, color: colors.disabled, marginRight: 10}}>{values.category}</Text>
          </View>
        </View>
        
      </View>
    )
}

export default QuestionForm