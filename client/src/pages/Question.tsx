import React from 'react'
import { View, FlatList, Dimensions, Text } from 'react-native'
import OptionBox from '../components/OptionBox'
import styles from '../styles/styles'
import textStyles from '../styles/textStyles'

interface Props {
  route: any
}

const Question: React.FC<Props> = ( {route} ) => {
  
  const height = Dimensions.get('screen').height

  const questions: any = route.params.questions.map((q: any) => q.node)
  
  const initialScrollID: number = route.params.initialScrollID

  const renderItem = ( {item}: {item: any} ) => <QuestionScreen item={item}/>

  return (
    <View style={styles.mainContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        initialScrollIndex={initialScrollID}
        data={questions}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        getItemLayout={(data: any, index: number) => (
          {length: height, offset: height * index, index}
        )}/>
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