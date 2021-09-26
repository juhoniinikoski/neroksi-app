import { gql, UserInputError, ForbiddenError } from 'apollo-server';

import Category from '../../models/Category';

export const typeDefs = gql`
  extend type Mutation {
    """
    Deletes the category which has the given id, if it is created by the authorized user.
    """
    deleteCategory(id: ID!): Boolean
  }
`;

export const resolvers = {
  Mutation: {
    deleteCategory: async (obj, args, { authService }) => {

      const authorizedUser = await authService.getAuthorizedUserOrFail();

      const category = await Category.query().findById(args.id);

      if (!category) {
        throw new UserInputError(`Review with id ${args.id} does not exist`);
      }

      if (category.userId !== authorizedUser.id) {
        throw new ForbiddenError('User is not authorized to delete the review');
      }

      await Category.query()
        .findById(args.id)
        .delete();

      return true;
    },
  },
};

export default {
  typeDefs,
  resolvers,
};
