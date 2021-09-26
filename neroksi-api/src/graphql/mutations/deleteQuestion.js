import { gql, UserInputError, ForbiddenError } from 'apollo-server'
import Question from '../../models/Question'

export const typeDefs = gql`
  extend type Mutation {
    """
    Deletes the category which has the given id, if it is created by the authorized user.
    """
    deleteQuestion(id: ID!): Boolean
  }
`

export const resolvers = {
  Mutation: {
    deleteQuestion: async (obj, args, { authService }) => {

      const authorizedUser = await authService.getAuthorizedUserOrFail()

      const question = await Question.query().findById(args.id)

      if (!question) {
        throw new UserInputError(`Question with id ${args.id} does not exist`)
      }

      if (question.userId !== authorizedUser.id) {
        throw new ForbiddenError('User is not authorized to delete the question')
      }

      await Question.query()
        .findById(args.id)
        .delete()

      return true
    },
  },
};

export default {
  typeDefs,
  resolvers,
}
