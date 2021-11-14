import { StyleSheet } from 'react-native'
import colors from './colorStyles'

const textStyles = StyleSheet.create({
    title: {
      color: colors.lightText,
      fontWeight: 'bold',
      fontSize: 40,
    },
    smallTitle: {
      color: colors.lightText,
      fontWeight: 'bold',
      fontSize: 24,
    },
    subTitle: {
      color: colors.lightText,
      fontWeight: 'bold',
      fontSize: 20,
    },
    bodyText: {
      color: colors.lightText,
      fontSize: 17,
      fontWeight: 'normal'
    },
    questionText: {
      color: colors.lightText,
      fontSize: 20,
      fontWeight: 'normal'
    },
    placeHolder: {
      color: '#999999',
      fontSize: 17,
      fontWeight: 'normal'
    }
})

export default textStyles