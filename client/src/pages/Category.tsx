import { useHeaderHeight } from '@react-navigation/stack'
import React from 'react'
import { Text, View, FlatList, Pressable } from 'react-native'
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

  const { questions, loading } = useQuestions("ASC", "", id)
  const headerHeight = useHeaderHeight()

  const parsedQuestions = questions ? questions.map((q: any) => q.node) : undefined

  const renderItem = ( {item, index}: {item: any, index: number} ) => (
    <Pressable onPress={() => navigation.navigate('Question', {questions: questions, initialScrollID: index
    })} style={styles.question}>
      <Text style={textStyles.bodyText}>{item.questionTitle}</Text>
    </Pressable>
  )

  const listHeader = () => (
    <View>
      <Text style={textStyles.smallTitle}>{'📎  ' + title}</Text>
    </View>
  )

  const separatorItem = () => (
    <View style={styles.separator}/>
  )

  if (loading) {
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
    </View>
  )
}

export default Category