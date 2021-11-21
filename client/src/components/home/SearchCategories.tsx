import React from "react"
import { FlatList, Pressable, Text, TextInput, View } from "react-native"
import useFindCategories from "../../hooks/useFindCategories"
import styles from "../../styles/styles"
import textStyles from "../../styles/textStyles"
import { useNavigation } from '@react-navigation/native'

interface Props {
  setSearch: (boolean: boolean) => void
}

const SearchCategories: React.FC<Props> = ({ setSearch }) => {

  const [text, setText] = React.useState<string>('')
  const navigation = useNavigation()
  const { categories, loading, getSearch } = useFindCategories("ASC", text)

  React.useEffect(() => {
    if (text !== '') {
      getSearch()
    }
  }, [text])

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

  return (
    <View>
      <TextInput
        onFocus={() => setSearch(true)}
        onBlur={() => setSearch(false)}
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Etsi lisää...'
        style={styles.searchBar}
        defaultValue={text}
        onChangeText={async text => setText(text)}
        >
      </TextInput>
      {text !== '' ?
      <FlatList
      data={parsedCategories}
      renderItem={renderItem}
      >
      </FlatList> : <></>}
    </View>
    
  )
}

export default SearchCategories