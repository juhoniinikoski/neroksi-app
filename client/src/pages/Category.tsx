import { useHeaderHeight } from '@react-navigation/stack'
import React from 'react'
import { Text, View, FlatList, Button, TouchableWithoutFeedback, Dimensions } from 'react-native'
import QuestionBox from '../components/QuestionBox'
import useQuestions from '../hooks/useQuestions'
import styles from '../styles/styles'
import textStyles from '../styles/textStyles'
import AddQuestion from './AddQuestion'
import { BlurView } from 'expo-blur'
import colors from '../styles/colorStyles'


interface Props {
  navigation: any
  route: any
}

const Category: React.FC<Props> = ( {route, navigation} ) => {

  const id = route.params.category.id
  const title = route.params.category.categoryTitle

  const width = Dimensions.get('screen').width

  const [addScreen, showAddScreen] = React.useState(false)

  const { questions, loading, fetchMore } = useQuestions(id, 12, 12)
  const headerHeight = useHeaderHeight()

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

  const listHeader = () => (
    <View>
      <Text style={{...textStyles.smallTitle, marginBottom: 16}}>{'📎  ' + title}</Text>
    </View>
  )

  const listFooter = () => (
    <View style={{height: 24}}>
    </View>
  )

  const separatorItem = () => (
    <View style={styles.bigSeparator}/>
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
        style={{alignSelf: 'stretch', marginTop: 4}}
        onEndReachedThreshold={1}
        onEndReached={onEndReach}
      />
      <Button title='lisää kysymys' onPress={() => navigation.navigate('Add')}></Button>
    </View>
  )
}

export default Category