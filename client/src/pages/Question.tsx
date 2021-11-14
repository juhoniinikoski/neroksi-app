import React from 'react'
import { View, FlatList, Dimensions, Text, Button } from 'react-native'
import OptionBox from '../components/question/OptionBox'
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

  const flatlistRef = React.useRef(questions)
  
  const initialScrollID: number = route.params.initialScrollID

  const renderItem = ( {item, index}: {item: any, index: number} ) => <QuestionScreen item={item} index={index} scroll={handleScroll} lastIndex={questions.length - 1}/>

  const onEndReach = () => {
    fetchMore()
  }

  const handleScroll = (index: number) => {
    console.log('painettu')
    flatlistRef.current.scrollToIndex({ animated: true, index: index })
  }

  return (
    <View style={styles.mainContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ref={flatlistRef}
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
  index: number
  scroll: any
  lastIndex: number
}

const QuestionScreen: React.FC<ScreenProps> = ( {item, index, scroll, lastIndex} ) => {
  
  const height = Dimensions.get('screen').height

  return (
    <View style={{...styles.scrollItemView, height: height}}>
      <Text style={{...textStyles.subTitle, marginBottom: 24}}>{item.questionTitle}</Text>
      {item.answers.map((ans: any) => <OptionBox key={ans.id} item={ans} index={index} scroll={scroll} lastIndex={lastIndex}/>)}
    </View>
  )
}

export default Question