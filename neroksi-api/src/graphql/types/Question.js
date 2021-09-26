import { gql } from 'apollo-server';

export const typeDefs = gql`
type Question {
  id: ID!
  user: User!
  category: Category!
  userId: String!
  categoryId: String!
  createdAt: DateTime!
  questionTitle: String
}
`;

export const resolvers = {
  Question: {
    user: async ({ userId }, args, { dataLoaders: { userLoader } }) =>
      userLoader.load(userId),
    category: (
      { categoryId },
      args,
      { dataLoaders: { categoryLoader } },
    ) => categoryLoader.load(categoryId),
  },
};

export default {
  typeDefs,
  resolvers,
};
