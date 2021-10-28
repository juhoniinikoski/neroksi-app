import { StyleSheet } from 'react-native'
import colors, {themeColors} from './colorStyles'

const styles = StyleSheet.create({

    // COMMON

    mainContainer: {
        marginHorizontal: 16,
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    whiteBox: {
        backgroundColor: colors.light,
    },
    separator: {
        flex: 1, 
        borderWidth: 1,
        marginVertical: -1,
        marginLeft: 48,
        borderColor: themeColors.secondaryLight
    },
    bigSeparator: {
        flex: 1, 
        borderWidth: 4,
        borderColor: themeColors.primaryBackground
    },
    scrollItemView: {
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center'
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

    // CATEGORIES

    category: {
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: themeColors.primaryLight
    },
    firstCategory: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingTop: 24,
        paddingBottom: 16,
        backgroundColor: themeColors.primaryLight
    },
    lastCategory: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 24,
        backgroundColor: themeColors.primaryLight
    },

    // QUESTIONS

    question: {
        justifyContent: 'center',
        alignSelf: 'stretch',
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: themeColors.primaryLight
    },
    firstQuestion: {
        justifyContent: 'center',
        alignSelf: 'stretch',
        paddingTop: 24,
        paddingBottom: 16,
        paddingHorizontal: 16,
        backgroundColor: themeColors.primaryLight,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    lastQuestion: {
        justifyContent: 'center',
        alignSelf: 'stretch',
        paddingTop: 16,
        paddingBottom: 24,
        paddingHorizontal: 16,
        backgroundColor: themeColors.primaryLight,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    questionBox: {
        justifyContent: 'center',
        alignSelf: 'stretch',
        padding: 24,
        backgroundColor: themeColors.primaryLight,
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

    // ADD QUESTION

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
    addQuestionContainer: {
        paddingHorizontal: 24,
        paddingTop: 24,
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: themeColors.secondaryBackground
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

    // SIGN IN & REGISTER

    signInForm: {
        paddingHorizontal: 20,
        fontSize: 16,
        height: 44,
        backgroundColor: colors.light,
        marginTop: 16,
        borderRadius: 12
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
})

export default styles