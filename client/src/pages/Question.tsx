import React from 'react'
import { View, FlatList, Dimensions } from 'react-native'
import QuestionScreen from '../components/QuestionScreen'
import styles from '../styles/styles'

interface Props {
  route: any
}

const Question: React.FC<Props> = ( {route} ) => {
  
  const height = Dimensions.get('screen').height

  const questions: any = route.params.questions
  
  const initialScrollID: number = route.params.initialScrollID

  const renderItem = ( {item}: {item: any} ) => <QuestionScreen item={item}/>

  // add code of questionscreen here

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

export default Question