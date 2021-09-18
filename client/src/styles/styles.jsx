import { StyleSheet } from 'react-native'
import colors from './colorStyles'

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 16,
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    whiteBox: {
        backgroundColor: colors.light,
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
        borderWidth: 3,
        borderColor: colors.light,
        borderRadius: 12
    },
    checkIcon: {
        marginBottom: -16,
        zIndex: 1000,
        height: 32,
        alignItems: 'flex-end',
        shadowOffset: {width: 4, height: 2},
        shadowRadius: 6,
        shadowOpacity: .4
    },
    scrollItemView: {
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    separator: {
        flex: 1, 
        borderWidth: 1, 
        borderColor: colors.separator
    },
    searchBar: {
        paddingHorizontal: 20,
        fontSize: 16,
        flex: 1,
        height: 44,
        backgroundColor: colors.light,
        marginTop: 16,
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
        backgroundColor: colors.light,
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
        backgroundColor: colors.light,
        marginVertical: 8
    },
    registerForm: {
        paddingTop: 20,
        fontSize: 16,
        paddingBottom: 20,
        paddingHorizontal: 20,
        borderRadius: 16,
        backgroundColor: colors.light,
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
        backgroundColor: colors.light,
        marginRight: 36,
        borderRadius: 50
    },
    signInForm: {
        paddingHorizontal: 20,
        fontSize: 16,
        height: 44,
        backgroundColor: colors.light,
        marginTop: 16,
        borderRadius: 12
    }
})

export default styles