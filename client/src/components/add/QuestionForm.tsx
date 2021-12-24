import React, { useState } from 'react'
import { View, Pressable, Text, TextInput } from 'react-native'
import { useField } from 'formik'
import FormikTextInput from '../common/FormikTextInput'
import styles from '../../styles/styles'
import textStyles from '../../styles/textStyles'
import { FontAwesome5 } from '@expo/vector-icons'
import colors, { themeColors } from '../../styles/colorStyles'
import useCategories from '../../hooks/useCategories'
import { useNavigation } from '@react-navigation/native'

interface Props {
    onSubmit: () => void
    setFieldValue: any
    values: any
}

const QuestionForm: React.FC<Props> = ({ onSubmit, values, setFieldValue }) => {

    const [answers, setAnswers] = useState<Array<string>>(['answers[0]', 'answers[1]'])
    const [disabled, setDisabled] = useState<boolean>(true)
    const [selectCategory, setSelectCategory] = useState<boolean>(false)
  
    const { categories, loading, fetchMore } = useCategories("ASC", "")
    const parsedCategories = categories?.map((c: any) => c.node)

    const [categoryField, categoryMeta, categoryHelpers] = useField('categoryID')

    const isntEmpty = (value: string) => value != ''

    const navigation = useNavigation()

    React.useEffect(() => {
      setDisabled(!(values.answers.every(isntEmpty) && values.question != '' && !selectCategory))
    }, [values, selectCategory])

    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <Pressable onPress={onSubmit} disabled={disabled}>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: disabled ? colors.disabled : 'white', marginRight: 16}}>
              Seuraava
            </Text>
          </Pressable>
        ),
      })
    }, [navigation, disabled])

    const addAns = () => (
      setAnswers(['answers[0]', 'answers[1]', 'answers[2]']),
      setFieldValue({
        values: {...values, answers: values.answers.push('')}
      })
    )

    const removeAns = () => (
      setAnswers(['answers[0]', 'answers[1]']),
      setFieldValue({
        values: {...values, answers: values.answers.pop()}
      })
    )

    const setCategory = (c: {categoryTitle: string, id: number}) => {
      setFieldValue('category', c.categoryTitle)
      categoryHelpers.setValue(c.id)
    }

    const RenderItem = ( {category, index}: {category: any, index: number} ) => {

      const lastIndex = categories.length - 1
  
      return (
        <View>
          <Pressable
            onPress={() => setCategory(category)}
            style={index === 0 ? {...styles.firstCategory} : index === lastIndex ? styles.lastCategory : styles.category}>
            <Text style={textStyles.bodyText}>{'📎  ' + category.categoryTitle}</Text>
          </Pressable>
          {index !== lastIndex ? <SeparatorItem></SeparatorItem> : <></>}
        </View>
      )
    }

    const SeparatorItem = () => (
      <View style={{...styles.separator, alignSelf: 'stretch', justifyContent: 'flex-start'}}/>
    )
  
    return (
      <View>
        <Pressable style={styles.selectCategory} onPress={() => setSelectCategory(!selectCategory)}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 12, color: 'white', marginRight: 4}}>📎</Text>
            <Text style={{fontSize: 16, color: 'white'}}>{values.category}</Text>
            {selectCategory ? 
              <FontAwesome5 name="caret-up" size={20} style={{marginLeft: 8}} color='white' /> : 
              <FontAwesome5 name="caret-down" size={20} style={{marginLeft: 8}} color='white' />}
          </View>
        </Pressable>
        {selectCategory ? 

        // CATEGORY SELECTION FORM

        <View style={{marginTop: 24}}>
          <TextInput autoCapitalize='none' autoCorrect={false} placeholder='Hae kategoriaa...' style={{...styles.searchBar}}></TextInput>
          <Text style={{...textStyles.subTitle, marginBottom: 24}}>Lempparit</Text>
          {parsedCategories.map((c: any, index: number) => <RenderItem key={c.id} category={c} index={index}/>)}
        </View> : 
        
        // MAIN FORM

        <View>
          <FormikTextInput name='question' style={styles.questionForm} color='#999999' placeholder='Kirjoita kysymys tähän...'/>
          {answers.map((a, index) => 
          <View key={index}>
            {index == 2 ? <Pressable onPress={removeAns} style={{position: 'absolute', top: 16, right: 16, height: 15, width: 15, zIndex: 1000}}>
              <FontAwesome5 name="times" size={18} color={colors.disabled} />
            </Pressable> : <></>}
            <FormikTextInput name={a} style={styles.answerForm} color={colors.disabled} placeholder={`Anna ${index + 1}. ratkaisuvaihtoehto tähän`}/>
          </View>
          )}
          {answers.length === 2 ?
            <Pressable onPress={addAns} style={{...styles.answerForm, backgroundColor: themeColors.primaryBackground, flexDirection: 'row'}}>
              <FontAwesome5 name="plus" size={14} color='white' />
              <Text style={{fontSize: 16, marginLeft: 8, color: 'white'}}>lisää ratkaisu</Text>
            </Pressable> : <></>}
        </View>
        }
      </View>
    )
}

export default QuestionForm