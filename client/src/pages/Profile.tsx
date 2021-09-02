import React, { useState } from 'react'
import { View, TextInput, Pressable, Text, ScrollView, Switch } from 'react-native'
import { Formik, useField } from 'formik'
import FormikTextInput from '../components/FormikTextInput'
import { useHeaderHeight } from '@react-navigation/stack'
import styles from '../styles/styles'
import textStyles from '../styles/textStyles'
import { FontAwesome5 } from '@expo/vector-icons'
import colors from '../styles/colorStyles'

const initialValues = {
  question: '',
  category: null,
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
  correct: null
}

interface Props {
  onSubmit: () => void
  resetForm: (values: any) => void
  values: any
}

const AddQuestion: React.FC<Props> = ({ onSubmit, resetForm, values }) => {

  const [isEnabled, setIsEnabled] = useState<boolean>(false)
  const [answers, setAnswers] = useState<Array<string>>(['answers[0].ans', 'answers.[1].ans', 'answers[2].ans'])
  const [disabled, setDisabled] = useState<number>(1)
  
  const [correctField, correctMeta, correctHelpers] = useField('correct')
  const [privateField, privateMeta, privateHelpers] = useField('private')

  const toggleSwitch = () => (setIsEnabled(previousState => !previousState), privateHelpers.setValue(isEnabled ? false : true))

  const removeAns = (values: any) => (
    setAnswers(['answers[0].ans', 'answers.[1].ans']),
    setDisabled(0),
    resetForm({
      values: {...values, answers: {0: {...values.answers[0]}, 1: {...values.answers[1]}}}
    })
  )

  const addAns = () => (
    setAnswers(['answers[0].ans', 'answers.[1].ans', 'answers[2].ans']),
    setDisabled(1),
    resetForm({
      values: {...values, answers: {...values.answers, 2: initialValues.answers[2]}}
    })
  )

  const chooseCorrect = (index: number) => {
    correctHelpers.setValue(values.correct === index ? null : index)
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
      {/* {answers.map((a, index) => <Pressable key={index} onPress={() => console.log('painettu')} style={{height: 25, width: 25, backgroundColor: 'white', marginRight: 36, borderRadius: 50}}></Pressable>)} */}
      {answers.map((a, index) => 
        <View key={index} style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{...textStyles.bodyText, paddingRight: 10}}>{index + 1}.</Text>
          <Pressable onPress={() => chooseCorrect(index)} style={{...styles.correctAns, justifyContent: 'center', padding: 5}}>
            <View style={values.correct === index ? {backgroundColor: colors.background, height: '100%', borderRadius: 50} : null}></View>
          </Pressable>
        </View>)}
      </View>
      <View style={{...styles.toggle, marginTop: 36}}>
        <Text style={{...textStyles.subTitle}}>Yksityinen</Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled}></Switch>
      </View>
      <Pressable onPress={onSubmit} style={styles.submitButton}>
		    <Text style={textStyles.subTitle}>Tallenna</Text>
      </Pressable>
    </View>
  )
}

const Profile: React.FC<Props> = () => {

	const headerHeight = useHeaderHeight()

	const onSubmit = (values: any, resetForm: () => void) => {
    values.answers[values.correct].correct = true
		console.log(values)
    resetForm()
	}

	return (
		<View style={styles.mainContainer}>
			<ScrollView style={{ flex: 1, alignSelf: 'stretch' }} contentContainerStyle={{paddingTop: headerHeight}}>
				<Formik initialValues={initialValues} onSubmit={(values, { resetForm }) => {onSubmit(values, resetForm)}}>
					{({ handleSubmit, resetForm, values }) => <AddQuestion onSubmit={handleSubmit} values={values} resetForm={resetForm}/>}
				</Formik>
			</ScrollView>
		</View>
	)
}

export default Profile