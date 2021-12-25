import React from 'react'
import { View, Text, FlatList, Pressable } from 'react-native'
import { useAuth } from '../contexts/auth'
import useCollections from '../hooks/useCollections'
import useCurrentUser from '../hooks/useCurrentUser'
import { useHeaderHeight } from '@react-navigation/elements'
import styles from '../styles/styles'
import textStyles from '../styles/textStyles'
import colors from '../styles/colorsStyles'

interface Props {

}

const Profile: React.FC<Props> = () => {

  const { authData } = useAuth()
  const username = authData?.name

  const { user } = useCurrentUser()
  
  const { collections } = useCollections("", user ? user.id : "")
  const parsedCollections = collections?.map((c: any) => c.node)

  const headerHeight = useHeaderHeight()

  const renderItem = ( {item, index}: {item: any, index: number} ) => {

    return (
      <View style={styles.collectionContainer}>
          <Pressable
            style={[styles.collection, index % 2 == 0 ? { marginRight: 8 } : { marginLeft: 8 }]}
            // onPress={() => navigation.navigate('Category', {category: item})}>
            onPress={() => console.log("painettu")}>
            <Text style={textStyles.bodyText}>{item.collectionTitle}</Text>
            <Text style={{color: colors.disabled}}>{item.totalQuestions} kysymystä</Text>
          </Pressable>
      </View>
    )
  }

  const listHeader = () => (
    <View>
      <Text style={{...textStyles.subTitle, color: colors.disabled}}>Heipä hei,</Text>
      <Text style={{...textStyles.title, fontSize: 28, marginTop: 2, marginBottom: 6}}>{username} 👋</Text>
      <Text style={{...textStyles.subTitle, color: colors.disabled, marginBottom: 36}}>Tässä omat sivusi</Text>
    </View>
  )

  return (
    <View style={{...styles.mainContainer}}>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={parsedCollections}
        numColumns={2}
        contentContainerStyle={{paddingTop: headerHeight}}
        renderItem={renderItem}
        ListHeaderComponent={listHeader}
        keyExtractor={(item) => item.id}
        style={{alignSelf: 'stretch', marginTop: 4}}
        onEndReachedThreshold={1}
        // onEndReached={onEndReach}
      />
    </View>
  )
}

export default Profile