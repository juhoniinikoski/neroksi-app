import { gql } from 'apollo-server'
import * as yup from 'yup'
import Question from '../../models/Question'

export const typeDefs = gql`
type Category {
  id: ID!
  user: User!
  userId: String!
  createdAt: DateTime!
  questions(first: Int, after: String): QuestionConnection!
  categoryTitle: String
}
`

const argsSchema = yup.object({
  after: yup.string(),
  first: yup
    .number()
    .min(1)
    .max(30)
    .default(30),
})

export const resolvers = {
  Category: {
    user: async ({ userId }, args, { dataLoaders: { userLoader } }) =>
      userLoader.load(userId),

    questions: async ({ id }, args) => {

      const { first, after } = await argsSchema.validate(args);

      return Question.query()
        .where({
          categoryId: id,
        })
        .cursorPaginate({
          orderBy: [{ column: 'createdAt', direction: 'desc' }, 'id'],
          first,
          after,
        });
    },
  },
};

export default {
  typeDefs,
  resolvers,
};
