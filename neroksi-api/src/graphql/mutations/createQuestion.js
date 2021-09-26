import { gql, ApolloError } from 'apollo-server'
import * as yup from 'yup'
import Category from '../../models/Category'
import { v4 as uuid } from 'uuid'
import Question from '../../models/Question'

export const typeDefs = gql`
  input CreateQuestionInput {
    categoryName: String!
    questionTitle: String
  }

  extend type Mutation {
    """
    Creates a question for the given category defined by rcategoryName.
    """
    createQuestion(question: CreateQuestionInput): Question
  }
`

const argsSchema = yup.object().shape({
  question: yup.object().shape({
    categoryName: yup
      .string()
      .required()
      .lowercase()
      .trim(),
    questionTitle: yup
      .string()
      .max(2000)
      .trim(),
  }),
});

export const resolvers = {
  Mutation: {
    createQuestion: async (obj, args, { authService }) => {

      const authorizedUser = await authService.getAuthorizedUserOrFail();

      const { question } = await argsSchema.validate(args, {
        stripUnknown: true,
      });

      const { categoryName } = question

      const existingCategory = await Category.query().findOne({
        categoryTitle: categoryName
      })

      const categoryId = existingCategory.id

      return Question.query().insertAndFetch({
        id: uuid(),
        userId: authorizedUser.id,
        categoryId,
        questionTitle: question.questionTitle,
      });
    },
  },
};

export default {
  typeDefs,
  resolvers,
};
