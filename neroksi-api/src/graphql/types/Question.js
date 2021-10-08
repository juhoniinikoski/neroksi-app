import { gql } from 'apollo-server'

export const typeDefs = gql`
type Question {
  id: ID!
  user: User!
  category: Category!
  userId: String!
  categoryId: String!
  createdAt: DateTime!
  answers: [Answer]
  questionTitle: String
  private: Boolean
}
`

export const resolvers = {
  Question: {
    user: async ({ userId }, args, { dataLoaders: { userLoader } }) =>
      userLoader.load(userId),
    category: (
      { categoryId },
      args,
      { dataLoaders: { categoryLoader } },
    ) => categoryLoader.load(categoryId),
    answers: ( {answers} ) => JSON.parse(answers).map(a => ({id: a.id, answer: a.answer, correct: a.correct}))
  },
}

export default {
  typeDefs,
  resolvers,
}
