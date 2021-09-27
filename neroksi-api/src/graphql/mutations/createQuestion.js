import { gql, ApolloError } from 'apollo-server'
import * as yup from 'yup'
import Category from '../../models/Category'
import { v4 as uuid } from 'uuid'
import Question from '../../models/Question'

export const typeDefs = gql`
  input CreateQuestionInput {
    categoryTitle: String!
    questionTitle: String!
    answers: [String!]!
    correctId: Int!
  }

  extend type Mutation {
    """
    Creates a question for the given category defined by categoryTitle.
    """
    createQuestion(question: CreateQuestionInput): Question
  }
`

const answers = ["vastaus1", "vastaus2", "vastaus3"]
const correctID = 1


const argsSchema = yup.object().shape({
  question: yup.object().shape({
    categoryTitle: yup
      .string()
      .required()
      .lowercase()
      .trim(),
    questionTitle: yup
      .string()
      .max(2000)
      .trim(),
    answers: yup
      .array(yup.string()),
    correctId: yup
      .number()
  }),
})

export const resolvers = {
  Mutation: {
    createQuestion: async (obj, args, { authService }) => {

      const authorizedUser = await authService.getAuthorizedUserOrFail()

      const { question } = await argsSchema.validate(args, {
        stripUnknown: true,
      })

      const { categoryTitle, questionTitle, answers, correctId } = question

      const existingCategory = await Category.query().findOne({
        categoryTitle: categoryTitle
      })

      const answersObjects = answers
        .map((a, index) => ({id: index, answer: a, correct: index === correctId ? true : false}))

      const categoryId = existingCategory.id

      return Question.query().insertAndFetch({
        id: uuid(),
        userId: authorizedUser.id,
        categoryId,
        questionTitle: questionTitle,
        answers: JSON.stringify(answersObjects)
      })
    },
  },
};

export default {
  typeDefs,
  resolvers,
}
