import { NavigationRouteContext } from '@react-navigation/core'
import React from 'react'
import { View, FlatList, Dimensions, Text } from 'react-native'
import OptionBox from '../components/OptionBox'
import useQuestions from '../hooks/useQuestions'
import styles from '../styles/styles'
import textStyles from '../styles/textStyles'

interface Props {
  route: any
}

const Question: React.FC<Props> = ( {route} ) => {
  
  const height = Dimensions.get('screen').height

  const { questions, loading, fetchMore } = useQuestions(route.params.id, 12, route.params.lastIndex + 1)
  const parsedQuestions = questions?.map((q: any) => q.node)
  
  const initialScrollID: number = route.params.initialScrollID

  const renderItem = ( {item}: {item: any} ) => <QuestionScreen item={item}/>

  const onEndReach = () => {
    fetchMore()
  }

  return (
    <View style={styles.mainContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        initialScrollIndex={initialScrollID}
        data={parsedQuestions}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        getItemLayout={(data: any, index: number) => (
          {length: height, offset: height * index, index}
        )}
        onEndReached={onEndReach}
        onEndReachedThreshold={2}
        />
    </View>
  )
}

interface ScreenProps {
  item: any
}

const QuestionScreen: React.FC<ScreenProps> = ( {item} ) => {
  
  const height = Dimensions.get('screen').height

  return (
    <View style={{...styles.scrollItemView, height: height}}>
      <Text style={{...textStyles.subTitle, marginBottom: 24}}>{item.questionTitle}</Text>
      {item.answers.map((ans: any) => <OptionBox key={ans.id} item={ans}/>)}
    </View>
  )
}

export default Question