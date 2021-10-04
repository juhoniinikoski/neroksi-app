import React from 'react'
import { View, Text, Pressable, FlatList, TextInput, Button } from 'react-native'
import { useHeaderHeight } from '@react-navigation/stack'
import useUserCategories from '../hooks/useUserCategories'
import styles from '../styles/styles'
import textStyles from '../styles/textStyles'
import useCategories from '../hooks/useCategories'
import colors from '../styles/colorStyles'

interface Props {
  navigation: any
}

const Home: React.FC<Props> = ( {navigation} ) => {

  const { categories, loading, fetchMore } = useCategories("ASC", "")
  const headerHeight = useHeaderHeight()

  const parsedCategories = categories?.map((c: any) => c.node)

  const renderItem = ( {item, index}: {item: any, index: number} ) => {

    const lastIndex = categories.length - 1

    return (
      <Pressable
        onPress={() => navigation.navigate('Category', {category: item})}
        style={index === 0 ? styles.firstCategory : index === lastIndex ? styles.lastCategory : styles.category}>
        <Text style={textStyles.bodyText}>{'📎  ' + item.categoryTitle}</Text>
      </Pressable>
    )
  }

  const listHeader = () => (
    <View>
      <Text style={textStyles.title}>Selaa</Text>
      <TextInput autoCapitalize='none' autoCorrect={false} placeholder='Etsi lisää...' style={styles.searchBar}></TextInput>
      <Text style={{...textStyles.subTitle, marginBottom: 16}}>Lempparit</Text>
    </View>
  )

  const separatorItem = () => (
    <View style={styles.separator}/>
  )

  if (loading && !parsedCategories) {
    return (
      <View style={styles.mainContainer}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={{...styles.mainContainer}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={parsedCategories}
        contentContainerStyle={{paddingTop: headerHeight}}
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

export default Home