import { gql } from 'apollo-server';
import * as yup from 'yup';
import Category from '../../models/Category';

export const typeDefs = gql`
  extend type Query {
    """
    Returns paginated users.
    """
    categories(
      first: Int
      after: String
      searchKeyword: String
    ): CategoryConnection!
  }
`;

const getLikeFilter = (value) => `%${value}%`;

const argsSchema = yup.object({
  after: yup.string(),
  first: yup.number().min(1).max(30).default(30),
  searchKeyword: yup.string().trim(),
});

export const resolvers = {
  Query: {
    categories: async (obj, args) => {
      const { first, after, searchKeyword } = await argsSchema.validate(args);

      let query = Category.query();

      if (searchKeyword) {
        const likeFilter = getLikeFilter(searchKeyword);

        query = query.where((qb) => {
          return qb.where('categoryTitle', 'like', likeFilter);
        });
      }

      return query.cursorPaginate({
        orderBy: [{ column: 'createdAt', order: 'desc' }, 'id'],
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
