import React from 'react'
import { View, ScrollView } from 'react-native'
import { Formik } from 'formik'
import { useHeaderHeight } from '@react-navigation/stack'
import styles from '../styles/styles'
import QuestionForm from '../components/QuestionForm'
import { useMutation } from '@apollo/client'
import { CREATE_QUESTION } from '../utils/graphql/mutations'

const initialValues = {
  question: '',
  category: '',
  categoryID: '',
  answers: {
    0: {
      id: 0,
      ans: '',
      correct: false
    },
    1: {
      id: 1,
      ans: '',
      correct: false
    },
    2: {
      id: 2,
      ans: '',
      correct: false
    }
  },
  private: false,
  correct: ''
}

interface Props {
  onSubmit: () => void
  resetForm: (values: any) => void
  setFieldValue: any
  values: any
}

const AddQuestion: React.FC<Props> = () => {

	const headerHeight = useHeaderHeight()

	const onSubmit = async (values: any, resetForm: () => void) => {

    values.answers[values.correct].correct = true

    createQuestion({ variables: {
      question: values.question,
      answers: Object.values(values.answers),
      correctAnswer: values.correct,
      private: values.private,
      category: values.categoryID
    } })

    resetForm()
	}

  const [ createQuestion ] = useMutation(CREATE_QUESTION, {
    onError: (error) => {
      console.log(error)
    }
  })

	return (
		<View style={styles.mainContainer}>
			<ScrollView
        style={{ flex: 1, alignSelf: 'stretch' }}
        contentContainerStyle={{paddingTop: headerHeight}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
				<Formik initialValues={initialValues} onSubmit={(values, { resetForm }) => {onSubmit(values, resetForm)}}>
					{({ handleSubmit, resetForm, values, setFieldValue }) => <QuestionForm onSubmit={handleSubmit} values={values} setFieldValue={setFieldValue}/>}
				</Formik>
			</ScrollView>
		</View>
	)
}

export default AddQuestion