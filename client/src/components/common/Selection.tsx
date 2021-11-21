import React from 'react'
import { Pressable, Text, View } from 'react-native'
import colors, { themeColors } from '../../styles/colorStyles'
import styles from '../../styles/styles'


interface Props {
  names: Array<string>
  handlePress: (index: number) => void
}

interface RenderItemProps {
  name: string
  index: number
}
  
const Selection: React.FC<Props> = ({names, handlePress}) => {

  const [selected, setSelected] = React.useState<number>(0)
  const lastIndex = names.length - 1

  const RenderItem: React.FC<RenderItemProps> = ({name, index}) => {

    return (
      <Pressable
        style={index === 0 ? 
          {...styles.leftSelectionItem, backgroundColor: index === selected ? themeColors.primaryLight : themeColors.secondaryBackground} : 
          index === lastIndex ?
          {...styles.rightSelectionItem, backgroundColor: index === selected ? themeColors.primaryLight : themeColors.secondaryBackground} :
          {...styles.selectionItem, backgroundColor: index === selected ? themeColors.primaryLight : themeColors.secondaryBackground}
        }
        onPress={() => {
          setSelected(index)
          handlePress(index)
        }}>
        <Text style={{color: index === selected ? 'white' : colors.disabled, fontSize: 17, fontWeight: 'bold'}}>{name}</Text>
      </Pressable>
    )
  }

  return (
    <View style={{marginVertical: 24, flexDirection: 'row', height: 45}}>
      {names.map((n: any, index: number) => <RenderItem key={index} index={index} name={n}/>)}
    </View>
  )
}

export default Selection