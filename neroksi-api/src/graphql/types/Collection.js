import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Collection {
    id: ID!
    user: User!
    userId: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    totalQuestions: Int
    collectionTitle: String
  }
`;

export const resolvers = {
  Collection: {
    user: async ({ userId }, args, { dataLoaders: { userLoader } }) =>
      userLoader.load(userId),
  },
};

export default {
  typeDefs,
  resolvers,
};
