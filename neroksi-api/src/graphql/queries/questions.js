import { gql } from 'apollo-server';
import * as yup from 'yup';
import Question from '../../models/Question';

export const typeDefs = gql`
  extend type Query {
    """
    Returns paginated questions.
    """
    questions(
      first: Int
      after: String
      categoryId: String
      collectionId: String
    ): QuestionConnection!
  }
`;

const argsSchema = yup.object({
  categoryId: yup.string(),
  after: yup.string(),
  first: yup.number().min(1).max(30).default(30),
});

export const resolvers = {
  Query: {
    questions: async (obj, args) => {
      const { first, after } = await argsSchema.validate(args);

      let query = Question.query().where({ categoryId: args.categoryId });

      if (args.collectionId) {
        query = Question.query().where(
          'collectionId',
          'like',
          `%${args.collectionId}%`,
        );
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
