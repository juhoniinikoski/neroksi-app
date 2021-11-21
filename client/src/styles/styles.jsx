import { StyleSheet } from 'react-native'
import colors, {themeColors} from './colorStyles'
import textStyles from './textStyles'

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
        borderColor: themeColors.primaryBackground
    },
    scrollItemView: {
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    searchBar: {
        paddingHorizontal: 16,
        fontSize: 16,
        flex: 1,
        height: 44,
        backgroundColor: colors.light,
        marginTop: 16,
        marginBottom: 36,
        borderRadius: 12
    },
    selectionItem: {
        marginHorizontal: 1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    leftSelectionItem: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginRight: 1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightSelectionItem: {
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginLeft: 1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // CATEGORIES

    category: {
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: themeColors.primaryLight,
    },
    firstCategory: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingTop: 24,
        paddingBottom: 16,
        backgroundColor: themeColors.primaryLight,
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

    // ADD QUESTION

    questionForm: {
        paddingTop: 36,
        paddingBottom: 36,
        fontSize: textStyles.questionText.fontSize,
        color: 'white',
    },
    answerForm: {
        paddingTop: 24,
        paddingBottom: 24,
        paddingHorizontal: 36,
        borderRadius: 16,
        backgroundColor: colors.light,
        marginVertical: 8,
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'flex-start'
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
        paddingHorizontal: 16,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: themeColors.secondaryBackground
    },
    addAns: {
        flexDirection: 'row',
        width: 50,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    selectCategory: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        alignSelf: 'flex-start',
        paddingHorizontal: 16,
        paddingVertical: 8
    },

    // SIGN IN & REGISTER

    signInForm: {
        paddingHorizontal: 16,
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
        paddingHorizontal: 16,
        borderRadius: 16,
        backgroundColor: colors.light,
        marginVertical: 8
    },
})

export default styles