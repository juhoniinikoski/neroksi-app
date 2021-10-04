import { useHeaderHeight } from '@react-navigation/stack'
import React from 'react'
import { Text, View, FlatList, Pressable, Button } from 'react-native'
import useQuestions from '../hooks/useQuestions'
import styles from '../styles/styles'
import textStyles from '../styles/textStyles'

interface Props {
  navigation: any
  route: any
}

const Category: React.FC<Props> = ( {route, navigation} ) => {

  const id = route.params.category.id
  const title = route.params.category.categoryTitle

  const { questions, loading, fetchMore } = useQuestions(id)
  const headerHeight = useHeaderHeight()

  const parsedQuestions = questions?.map((q: any) => q.node)

  const renderItem = ( {item, index}: {item: any, index: number} ) => {

    const lastIndex = questions.length - 1

    return (
      <Pressable
        onPress={() => navigation.navigate('Question', {questions: questions, initialScrollID: index})}
        style={index === 0 ? styles.firstQuestion : index === lastIndex ? styles.lastQuestion : styles.question}>
        <Text style={textStyles.bodyText}>{item.questionTitle}</Text>
      </Pressable>
    )
  }

  const listHeader = () => (
    <View>
      <Text style={{...textStyles.smallTitle, marginBottom: 16}}>{'📎  ' + title}</Text>
    </View>
  )

  const separatorItem = () => (
    <View style={styles.bigSeparator}/>
  )

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
        keyExtractor={(item) => item.id}
        style={{alignSelf: 'stretch', marginTop: 4}}
      />
      <Button title='load more' onPress={fetchMore}></Button>
    </View>
  )
}

export default Category