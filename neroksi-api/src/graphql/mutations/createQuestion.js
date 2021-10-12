import { gql } from 'apollo-server'
import * as yup from 'yup'
import Category from '../../models/Category'
import { v4 as uuid } from 'uuid'
import Question from '../../models/Question'

export const typeDefs = gql`
  input CreateQuestionInput {
    categoryId: String!
    questionTitle: String!
    answers: [String!]!
    correctId: Int!
    private: Boolean!
  }

  extend type Mutation {
    """
    Creates a question for the given category defined by categoryTitle.
    """
    createQuestion(question: CreateQuestionInput): Question
  }
`

const argsSchema = yup.object().shape({
  question: yup.object().shape({
    categoryId: yup
      .string()
      .required()
      .trim(),
    questionTitle: yup
      .string()
      .required()
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

      // implement authentication to client

      const { question } = await argsSchema.validate(args, {
        stripUnknown: true,
      })

      const { categoryId, questionTitle, answers, correctId } = question

      const existingCategory = await Category.query().findOne({
        id: categoryId
      })



      const answersObjects = answers
        .map((a, index) => ({id: index, answer: a, correct: index === correctId ? true : false}))

      return Question.query().insertAndFetch({
        id: uuid(),
        userId: authorizedUser.id,
        categoryId,
        questionTitle: questionTitle,
        answers: JSON.stringify(answersObjects),
        private: args.question.private
      })
    },
  },
};

export default {
  typeDefs,
  resolvers,
}
