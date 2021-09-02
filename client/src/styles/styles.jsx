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
    scrollItemView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    separator: {
        flex: 1, 
        borderWidth: 1, 
        borderColor: 'rgba(255, 255, 255, .25)'
    },
    searchBar: {
        paddingHorizontal: 20,
        fontSize: 16,
        flex: 1,
        height: 44,
        backgroundColor: 'white',
        marginTop: 24,
        marginBottom: 36,
        borderRadius: 12
    },
    questionForm: {
        paddingTop: 20,
        fontSize: 16,
        paddingBottom: 20,
        paddingHorizontal: 20,
        height: 180,
        borderRadius: 16,
        backgroundColor: 'white',
        marginBottom: 36,
        marginTop: 24
    },
    answerForm: {
        paddingTop: 20,
        fontSize: 16,
        paddingBottom: 20,
        paddingHorizontal: 20,
        height: 95,
        borderRadius: 16,
        backgroundColor: 'white',
        marginVertical: 8
    },
    submitButton: {
        marginTop: 48,
        marginBottom: 48,
        height: 75,
        backgroundColor: colors.submit,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16
    },
    toggle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addAns: {
        flexDirection: 'row',
        width: 50,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    correctAns: {
        height: 25,
        width: 25,
        backgroundColor: 'white',
        marginRight: 36,
        borderRadius: 50
    }
})

export default styles