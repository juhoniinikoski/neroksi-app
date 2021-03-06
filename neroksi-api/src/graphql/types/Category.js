import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Category {
    id: ID!
    user: User!
    userId: String!
    createdAt: DateTime!
    questions(first: Int, after: String): QuestionConnection!
    categoryTitle: String
  }
`;

export const resolvers = {
  Category: {
    user: async ({ userId }, args, { dataLoaders: { userLoader } }) =>
      userLoader.load(userId),
  },
};

export default {
  typeDefs,
  resolvers,
};
