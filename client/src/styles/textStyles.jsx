import { StyleSheet } from 'react-native'
import colors from './colorStyles'

const textStyles = StyleSheet.create({
    title: {
      color: colors.lightText,
      fontWeight: 'bold',
      fontSize: 40,
    },
    bodyText: {
      color: colors.darkText,
      fontSize: 16,
      fontWeight: 'normal'
    },
})

export default textStyles