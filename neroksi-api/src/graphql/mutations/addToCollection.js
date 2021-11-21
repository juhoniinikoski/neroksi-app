import { gql } from 'apollo-server';
import Question from '../../models/Question';

export const typeDefs = gql`
  input AddToCollectionInput {
    questionId: String!
    collectionId: String!
  }

  extend type Mutation {
    addToCollection(collection: AddToCollectionInput): Int
  }
`;

export const resolvers = {
  Mutation: {
    addToCollection: async (obj, args) => {
      const questionId = args.collection.questionId;
      const collectionId = args.collection.collectionId;
      // const authorizedUser = await authService.getAuthorizedUserOrFail()

      const query = await Question.query().findOne({ id: questionId });
      const collections = query.collectionId.split(',');
      console.log(collections);

      if (!collections.includes(collectionId)) {
        const newCollectionIds = collections.concat(collectionId);
        return await Question.query()
          .findOne({ id: questionId })
          .update({ collectionId: newCollectionIds });
      }

      return 0;
    },
  },
};

export default {
  typeDefs,
  resolvers,
};
