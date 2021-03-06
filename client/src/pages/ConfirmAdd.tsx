import React from 'react'
import { View, ScrollView } from 'react-native'
import { Formik } from 'formik'
import { useHeaderHeight } from '@react-navigation/elements'
import { StackNavigationProp } from '@react-navigation/stack'
import styles from '../styles/styles'
import { useMutation } from '@apollo/client'
import { CREATE_QUESTION } from '../utils/graphql/mutations'
import { useNavigation } from '@react-navigation/native'
import ConfirmForm from '../components/add/ConfirmForm'
import { HomeStackParamList } from '../navigation/homeStack'

interface Props {
  route: any
}

const ConfirmAdd: React.FC<Props> = ( {route} ) => {

  const initialValues = route.params.initialValues
  const category = route.params.category

  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>()

	const headerHeight = useHeaderHeight()

  const [ createQuestion ] = useMutation(CREATE_QUESTION, {
    onError: (error) => {
      console.log(error)
    }
  })

	const onSubmit = async (values: any) => {

    await createQuestion({ variables: {
      categoryId: values.categoryID,
      questionTitle: values.question,
      answers: values.answers,
      correctId: values.correct,
      private: values.private
    }})

    navigation.navigate('Category', {category: category})
	}

	return (
		<View style={{...styles.addQuestionContainer, paddingTop: headerHeight}}>
      <ScrollView
        style={{ flex: 1, alignSelf: 'stretch' }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
				<Formik initialValues={initialValues} onSubmit={(values) => {onSubmit(values)}}>
					{({ handleSubmit, values, setFieldValue }) => <ConfirmForm onSubmit={handleSubmit} values={values} setFieldValue={setFieldValue}/>}
				</Formik>
			</ScrollView>
		</View>
	)
}

export default ConfirmAdd