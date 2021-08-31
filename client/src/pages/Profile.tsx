import React, { useState } from 'react'
import { View, TextInput, Pressable, Text, ScrollView, Switch } from 'react-native'
import { Formik, useField } from 'formik'
import FormikTextInput from '../components/FormikTextInput'
import { useHeaderHeight } from '@react-navigation/stack'
import styles from '../styles/styles'
import textStyles from '../styles/textStyles'

const initialValues = {
  question: '',
  ans1: '',
  ans2: '',
  ans3: ''
}

interface Props {
  onSubmit: any
  resetForm: any
  values: any
}

const AddQuestion: React.FC<Props> = ({ onSubmit, resetForm, values }) => {

  const [isEnabled, setIsEnabled] = useState(false)
  const [answers, setAnswers] = useState(['ans1', 'ans2', 'ans3'])

  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  const removeAns = (values: any) => (
    setAnswers(['ans1', 'ans2']),
    resetForm({
      values: {...values, ans3: ''}
    })
  )

  return (
    <View>
      <Text style={textStyles.title}>Lisää tehtävä</Text>
      <Text style={{...textStyles.subTitle, marginTop: 36}}>Tehtävä</Text>
      <FormikTextInput name='question' style={styles.questionForm} placeholder='Kirjoita kysymys tähän'/>
      <View style={{...styles.toggle, marginBottom: 16}}>
        <Text style={textStyles.subTitle}>Vaihtoehdot</Text>
        <View style={styles.addAns}>
          <Pressable onPress={() => setAnswers(['ans1', 'ans2', 'ans3'])} disabled={answers.length === 3 ? true : false} style={{height: 15, width: 15, backgroundColor: 'white'}}></Pressable>
          <Pressable onPress={() => removeAns(values)} disabled={answers.length === 2 ? true : false} style={{height: 15, width: 15, backgroundColor: 'white'}}></Pressable>
        </View>
      </View>
      {answers.map((a, index) => <FormikTextInput key={index} name={a} style={styles.answerForm} placeholder={`Anna ${index + 1}. ratkaisu tähän`}/>)}
      <Text style={{...textStyles.subTitle, marginTop: 28}}>Oikea ratkaisu</Text>
      <View style={{flexDirection: 'row', marginTop: 24}}>
      {/* {answers.map((a, index) => <Pressable key={index} onPress={() => console.log('painettu')} style={{height: 25, width: 25, backgroundColor: 'white', marginRight: 36, borderRadius: 50}}></Pressable>)} */}
      {answers.map((a, index) => 
        <View key={index} style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{...textStyles.bodyText, paddingRight: 10}}>{index + 1}.</Text>
          <Pressable onPress={() => console.log('painettu')} style={{height: 25, width: 25, backgroundColor: 'white', marginRight: 36, borderRadius: 50}}></Pressable>
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

	const onSubmit = (values: any) => {
		console.log(values)
	}

	return (
		<View style={styles.mainContainer}>
			<ScrollView style={{ flex: 1, alignSelf: 'stretch' }} contentContainerStyle={{paddingTop: headerHeight}}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					{({ handleSubmit, resetForm, values }) => <AddQuestion onSubmit={handleSubmit} values={values} resetForm={resetForm}/>}
				</Formik>
			</ScrollView>
		</View>
	)
}

export default Profile