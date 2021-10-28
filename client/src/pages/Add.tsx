import React from 'react'
import { View, ScrollView, TextInput, Dimensions } from 'react-native'
import { Formik } from 'formik'
import { useHeaderHeight } from '@react-navigation/stack'
import styles from '../styles/styles'
import QuestionForm from '../components/QuestionForm'
import { useMutation } from '@apollo/client'
import { CREATE_QUESTION } from '../utils/graphql/mutations'
import { useKeyboard } from '../hooks/useKeyboard'
import colors, { themeColors } from '../styles/colorStyles'

const initialValues = {
  question: '',
  category: '',
  categoryID: '',
  answers: [],
  private: false,
  correct: ''
}

interface Props {
  onSubmit: () => void
  resetForm: (values: any) => void
  setFieldValue: any
  values: any
}

const Add: React.FC = () => {

	const headerHeight = useHeaderHeight()

	const onSubmit = async (values: any, resetForm: () => void) => {

    console.log(values)

    createQuestion({ variables: {
      categoryId: values.categoryID,
      questionTitle: values.question,
      answers: values.answers,
      correctId: values.correct,
      private: values.private
    }})

    resetForm()
	}

  const [ createQuestion ] = useMutation(CREATE_QUESTION, {
    onError: (error) => {
      console.log(error)
    }
  })

	return (
		<View style={{...styles.addQuestionContainer, paddingTop: headerHeight}}>
      <ScrollView>
        <TextInput autoFocus={true} style={{height: 200, backgroundColor: themeColors.primaryBackground}}></TextInput>
      </ScrollView>
		</View>
	)
}

export default Add