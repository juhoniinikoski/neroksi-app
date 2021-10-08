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

const AddQuestion: React.FC<Props> = () => {

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