import { StyleSheet } from 'react-native'
import colors from './colorStyles'

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 16,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteBox: {
        backgroundColor: colors.box,
    },
    category: {
        justifyContent: 'center',
        paddingVertical: 16,
        backgroundColor: 'transparent'
    },
    question: {
        justifyContent: 'center',
        alignSelf: 'stretch',
        paddingVertical: 16
    },
    questionBox: {
        justifyContent: 'center',
        alignSelf: 'stretch',
        padding: 20,
        marginVertical: 8,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 12
    },
    separator: {
        flex: 1, 
        borderWidth: 1, 
        borderColor: 'rgba(255, 255, 255, .25)'
    },
    searchBar: {
        flex: 1,
        height: 44,
        backgroundColor: 'white',
        marginTop: 24,
        marginBottom: 36,
        borderRadius: 12
    }
})

export default styles