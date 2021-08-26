import React from 'react'
import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useHeaderHeight } from '@react-navigation/stack'
import useCategories from '../hooks/useCategories'
import styles from '../styles/styles'
import textStyles from '../styles/textStyles'

interface Props {
  navigation: any
}

const Home: React.FC<Props> = ( {navigation} ) => {

  const { categories, loading } = useCategories()
  const insets = useSafeAreaInsets()
  const headerHeight = useHeaderHeight()

  const renderItem = ( {item}: {item: any} ) => (
    <Pressable onPress={() => navigation.navigate('Category', {category: item})} style={styles.category}>
      <Text style={textStyles.bodyText}>{'📎  ' + item.categoryTitle}</Text>
    </Pressable>
  )

  const listHeader = () => (
    <View>
      <Text style={textStyles.title}>Selaa</Text>
      <View style={styles.searchBar}></View>
      <Text style={{...textStyles.subTitle, marginBottom: 16}}>Lempparit</Text>
    </View>
  )

  const separatorItem = () => (
    <View style={styles.separator}/>
  )

  if (loading) {
    return (
      <View style={styles.mainContainer}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={{...styles.mainContainer}}>
      <FlatList
        data={categories}
        contentContainerStyle={{paddingTop: headerHeight}}
        renderItem={renderItem}
        ItemSeparatorComponent={separatorItem}
        ListHeaderComponent={listHeader}
        keyExtractor={(item) => item.id}
        style={{alignSelf: 'stretch', marginTop: 4}}
      />
    </View>
  )
}

const oldStyles = StyleSheet.create({
  title: {
    marginTop: 16,
    paddingVertical: 8,
    fontSize: 30,
    fontWeight: "bold"
  }
})

export default Home