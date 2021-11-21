import { gql } from 'apollo-server';
import * as yup from 'yup';
import Category from '../../models/Category';

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String
    createdAt: DateTime!
    followedCategories(first: Int, after: String): CategoryConnection!
  }
`;

const argsSchema = yup.object({
  after: yup.string(),
  first: yup.number().min(1).max(30).default(30),
});

export const resolvers = {
  User: {
    followedCategories: async ({ id }, args) => {
      const { first, after } = await argsSchema.validate(args);

      return Category.query()
        .where({
          userId: id,
        })
        .cursorPaginate({
          orderBy: [{ column: 'createdAt', order: 'desc' }, 'id'],
          first,
          after,
        });
    },
    // categoryCount
  },
};

export default {
  typeDefs,
  resolvers,
};
