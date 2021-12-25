import { useHeaderHeight } from '@react-navigation/elements'
import React from 'react'
import { Text, View, FlatList, Button } from 'react-native'
import QuestionBox from '../components/category/QuestionBox'
import Selection from '../components/common/Selection'
import {useCategoryQuestions as useQuestions} from '../hooks/useQuestions'
import styles from '../styles/styles'
import textStyles from '../styles/textStyles'


interface Props {
  navigation: any
  route: any
}

const Category: React.FC<Props> = ( {route, navigation} ) => {

  const id = route.params.category.id
  const category = route.params.category

  const { questions, loading, fetchMore, refetch } = useQuestions(id, 12, 12)
  const headerHeight = useHeaderHeight()

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      refetch()
    })
    return unsubscribe
  }, [navigation])

  const parsedQuestions = questions?.map((q: any) => q.node)

  const renderItem = ( {item, index}: {item: any, index: number} ) => {

    const lastIndex = questions.length - 1

    return (
      <QuestionBox
        id={id}
        fetchMore={fetchMore}
        item={item}
        navigation={navigation}
        questions={questions}
        index={index}
        lastIndex={lastIndex}
      />
    )
  }

  const listHeader = () => {

    const handlePress = (index: number) => {
      console.log('pressed ' + index)
    }

    return (
      <View>
        <Text style={{...textStyles.smallTitle}}>{'📎  ' + category.categoryTitle}</Text>
        <Selection handlePress={handlePress} names={['Viimeisimmät', 'Suosituimmat']}/> 
      </View>
    )
  }

  const listFooter = () => (
    <View style={{height: 24}}>
    </View>
  )

  const separatorItem = () => (
    <View style={{...styles.separator, marginLeft: 0}}/>
  )

  const onEndReach = () => {
    fetchMore()
  }

  if (loading && !parsedQuestions) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={styles.mainContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingTop: headerHeight}}
        data={parsedQuestions}
        renderItem={renderItem}
        ItemSeparatorComponent={separatorItem}
        ListHeaderComponent={listHeader}
        ListFooterComponent={listFooter}
        keyExtractor={(item) => item.id}
        style={{alignSelf: 'stretch', marginTop: 16}}
        onEndReachedThreshold={1}
        onEndReached={onEndReach}
      />
      <Button title='lisää kysymys' 
        onPress={() => navigation.navigate('AddStack', {
          screen: 'Add',
          params: {
            screen: 'AddQuestions',
            params: {initialCategory: category}
          }})}>
        </Button>
    </View>
  )
}

export default Category