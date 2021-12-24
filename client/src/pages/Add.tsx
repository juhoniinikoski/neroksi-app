import React from 'react'
import { View, ScrollView } from 'react-native'
import { Formik } from 'formik'
import { useHeaderHeight } from '@react-navigation/stack'
import styles from '../styles/styles'
import QuestionForm from '../components/add/QuestionForm'
import { useNavigation } from '@react-navigation/native'

interface Props {
  onSubmit: () => void
  resetForm: (values: any) => void
  setFieldValue: any
  values: any
}

interface Props {
  route: any
}

const Add: React.FC<Props> = ({route}) => {

  const navigation = useNavigation()

  const initialCategory = route.params.initialCategory

  const initialValues = {
    question: '',
    category: initialCategory.categoryTitle,
    categoryID: initialCategory.id,
    answers: ['', ''],
    private: false,
    correct: ''
  }

	const headerHeight = useHeaderHeight()

	const onSubmit = async (values: any, resetForm: () => void) => {

    navigation.navigate('ConfirmAdd', {initialValues: values, category: initialCategory})
    
	}

	return (
		<View style={{...styles.addQuestionContainer, paddingTop: headerHeight}}>
      <ScrollView
        contentContainerStyle={{marginTop: 24}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
				<Formik initialValues={initialValues} onSubmit={(values, { resetForm }) => {onSubmit(values, resetForm)}}>
					{({ handleSubmit, resetForm, values, setFieldValue }) => <QuestionForm onSubmit={handleSubmit} values={values} setFieldValue={setFieldValue}/>}
				</Formik>
			</ScrollView>
		</View>
	)
}

export default Add