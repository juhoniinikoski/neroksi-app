import React from 'react'
import { View, Text, Pressable, FlatList, Button } from 'react-native'
import { useHeaderHeight } from '@react-navigation/stack'
import styles from '../styles/styles'
import textStyles from '../styles/textStyles'
import useCategories from '../hooks/useCategories'
import { useAuth } from '../contexts/auth'
import SearchCategories from '../components/home/SearchCategories'

interface Props {
  navigation: any
}

const Home: React.FC<Props> = ( {navigation} ) => {

  const auth = useAuth()

  const signOut = () => {
    auth.signOut();
  }

  const { categories, loading, fetchMore, refetch } = useCategories("ASC", "")
  const headerHeight = useHeaderHeight()
  const [searchActive, setSearchActive] = React.useState(false)

  const parsedCategories = categories?.map((c: any) => c.node)

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      refetch()
    })
    return unsubscribe
  }, [navigation])

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
      <SearchCategories setSearch={setSearchActive}/>
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

  const onEndReach = () => {
    fetchMore()
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
        onEndReachedThreshold={1}
        onEndReached={onEndReach}
      />
      <Button onPress={signOut} title={'kirjaudu ulos'}></Button>
    </View>
  )
}

export default Home