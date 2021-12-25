import { gql } from 'apollo-server';
import * as yup from 'yup';
import Collection from '../../models/Collection';

export const typeDefs = gql`
  extend type Query {
    """
    Returns paginated collections.
    """
    collections(
      first: Int
      after: String
      userId: String
    ): CollectionConnection!
  }
`;

const argsSchema = yup.object({
  id: yup.string(),
  after: yup.string(),
  first: yup.number().min(1).max(30).default(30),
});

export const resolvers = {
  Query: {
    collections: async (obj, args) => {
      const { first, after } = await argsSchema.validate(args);

      const query = Collection.query().where({ userId: args.userId });

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
