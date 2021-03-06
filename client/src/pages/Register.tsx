import React from 'react'
import { View, Button, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useHeaderHeight } from '@react-navigation/stack'
import styles from '../styles/styles'
import { Formik } from 'formik'
import RegisterForm from '../components/register&signin/RegisterForm'

const Register: React.FC<any> = () => {

  const initialValues = {
    username: '',
    email: '',
    password: ''
  }

  const headerHeight = useHeaderHeight()

  const onSubmit = async (values: any, resetForm: () => void) => {
    resetForm()
	}

  return (
    <View style={styles.mainContainer}>
        <ScrollView
          style={{ flex: 1, alignSelf: 'stretch' }}
          contentContainerStyle={{paddingTop: headerHeight}}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
            <Formik initialValues={initialValues} onSubmit={(values, { resetForm }) => {onSubmit(values, resetForm)}}>
              {({ handleSubmit, resetForm, values, setFieldValue }) => <RegisterForm onSubmit={handleSubmit}/>}
            </Formik>
        </ScrollView>
    </View>
  )
}

export default Register