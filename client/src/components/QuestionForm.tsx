import React, { useState } from 'react'
import { View, Pressable, Text, Switch } from 'react-native'
import { useField } from 'formik'
import FormikTextInput from '../components/FormikTextInput'
import styles from '../styles/styles'
import textStyles from '../styles/textStyles'
import { FontAwesome5 } from '@expo/vector-icons'
import colors from '../styles/colorStyles'
import useUserCategories from '../hooks/useUserCategories'

interface Props {
    onSubmit: () => void
    setFieldValue: any
    values: any
}

const initialValues = {
    question: '',
    category: '',
    categoryID: '',
    answers: {
      0: {
        ans: '',
        correct: false
      },
      1: {
        ans: '',
        correct: false
      },
      2: {
        ans: '',
        correct: false
      }
    },
    private: false,
    correct: ''
}

const QuestionForm: React.FC<Props> = ({ onSubmit, values, setFieldValue }) => {

    const [isEnabled, setIsEnabled] = useState<boolean>(false)
    const [answers, setAnswers] = useState<Array<string>>(['answers[0].ans', 'answers.[1].ans', 'answers[2].ans'])
    const [disabled, setDisabled] = useState<number>(1)
  
    const { categories, loading } = useUserCategories()
    
    const [correctField, correctMeta, correctHelpers] = useField('correct')
    const [privateField, privateMeta, privateHelpers] = useField('private')
    const [categoryField, categoryMeta, categoryHelpers] = useField('categoryID')
  
    const toggleSwitch = () => (setIsEnabled(previousState => !previousState), privateHelpers.setValue(isEnabled ? false : true))
  
    const removeAns = (values: any) => (
      setAnswers(['answers[0].ans', 'answers.[1].ans']),
      setDisabled(0),
      setFieldValue({
        values: {...values, answers: {0: {...values.answers[0]}, 1: {...values.answers[1]}}}
      })
    )
  
    const addAns = () => (
      setAnswers(['answers[0].ans', 'answers.[1].ans', 'answers[2].ans']),
      setDisabled(1),
      setFieldValue({
        values: {...values, answers: {...values.answers, 2: initialValues.answers[2]}}
      })
    )
  
    const chooseCorrect = (index: number) => {
      correctHelpers.setValue(values.correct === index ? '' : index)
    }
  
    const setCategory = (c: {categoryTitle: string, id: number}) => {
      setFieldValue('category', c.categoryTitle)
      categoryHelpers.setValue(c.id)
    }
  
    return (
      <View>
        <Text style={textStyles.title}>Lisää tehtävä</Text>
        <Text style={{...textStyles.subTitle, marginTop: 36}}>Tehtävä</Text>
        <FormikTextInput name='question' style={styles.questionForm} placeholder='Kirjoita kysymys tähän'/>
        <View style={{...styles.toggle, marginBottom: 16}}>
          <Text style={textStyles.subTitle}>Vaihtoehdot</Text>
          <View style={styles.addAns}>
            <Pressable onPress={() => removeAns(values)} disabled={answers.length === 2 ? true : false}>
              <FontAwesome5 name='minus' size={20} color={disabled === 1 ? 'white' : colors.disabled}/>
            </Pressable>
            <Pressable onPress={addAns} disabled={answers.length === 3 ? true : false}>
                <FontAwesome5 name='plus' size={20} color={disabled === 0 ? 'white' : colors.disabled}/>
            </Pressable>
          </View>
        </View>
        {answers.map((a, index) => <FormikTextInput key={index} name={a} style={styles.answerForm} placeholder={`Anna ${index + 1}. ratkaisu tähän`}/>)}
        <Text style={{...textStyles.subTitle, marginTop: 28}}>Oikea ratkaisu</Text>
        <View style={{flexDirection: 'row', marginTop: 24}}>
        {answers.map((a, index) => 
          <View key={index} style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{...textStyles.bodyText, paddingRight: 10}}>{index + 1}.</Text>
            <Pressable onPress={() => chooseCorrect(index)} style={{...styles.correctAns, justifyContent: 'center', padding: 5}}>
              <View style={values.correct === index ? {backgroundColor: colors.background, height: '100%', borderRadius: 50} : null}></View>
            </Pressable>
          </View>)}
        </View>
        <Text style={{...textStyles.subTitle, marginTop: 36}}>Kategoria</Text>
        <FormikTextInput name='category' style={styles.searchBar} placeholder='Kategoria'/>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}} >
          {categories.map((c: any, index: number) => <Pressable key={index} onPress={() => setCategory(c)}>
            <Text style={{...textStyles.bodyText, marginRight: 24, marginBottom: 24}}>{'📎  ' + c.categoryTitle}</Text>
          </Pressable>)}
        </View>
        <View style={{...styles.toggle, marginTop: 12}}>
          <Text style={{...textStyles.subTitle}}>Yksityinen</Text>
          <Switch onValueChange={toggleSwitch} value={isEnabled}></Switch>
        </View>
        <Pressable onPress={onSubmit} style={styles.submitButton}>
              <Text style={textStyles.subTitle}>Tallenna</Text>
        </Pressable>
      </View>
    )
}

export default QuestionForm