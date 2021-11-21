import { makeExecutableSchema, gql } from 'apollo-server';
import { merge } from 'lodash';

import User from './types/User';
import createUserMutation from './mutations/createUser';
import authorizeMutation from './mutations/authorize';
import usersQuery from './queries/users';
import authorizedUserQuery from './queries/authorizedUser';
import PageInfo from './types/PageInfo';
import OrderDirection from './enums/OrderDirection';
import UserConnection from './types/UserConnection';
import DateTime from './scalars/DateTime';
import Category from './types/Category';
import CategoryConnection from './types/CategoryConnection';
import createCategoryMutation from './mutations/createCategory';
import deleteCategoryMutation from './mutations/deleteCategory';
import categoryQuery from './queries/category';
import categoriesQuery from './queries/categories';
import Question from './types/Question';
import QuestionConnection from './types/QuestionConnection';
import createQuestionMutation from './mutations/createQuestion';
import deleteQuestionMutation from './mutations/deleteQuestion';
import Answer from './types/Answer';
import questionQuery from './queries/questions';
import Collection from './types/Collection';
import CollectionConnection from './types/CollectionConnection';
import collectionsQuery from './queries/collections';
import addToCollection from './mutations/addToCollection';

const rootTypeDefs = gql`
  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`;

const typeDefs = [
  rootTypeDefs,
  Question.typeDefs,
  QuestionConnection.typeDefs,
  Category.typeDefs,
  CategoryConnection.typeDefs,
  DateTime.typeDefs,
  User.typeDefs,
  createUserMutation.typeDefs,
  authorizeMutation.typeDefs,
  usersQuery.typeDefs,
  authorizedUserQuery.typeDefs,
  PageInfo.typeDefs,
  OrderDirection.typeDefs,
  UserConnection.typeDefs,
  createCategoryMutation.typeDefs,
  deleteCategoryMutation.typeDefs,
  categoryQuery.typeDefs,
  categoriesQuery.typeDefs,
  createQuestionMutation.typeDefs,
  deleteQuestionMutation.typeDefs,
  Answer.typeDefs,
  questionQuery.typeDefs,
  Collection.typeDefs,
  CollectionConnection.typeDefs,
  collectionsQuery.typeDefs,
  addToCollection.typeDefs,
];

const resolvers = merge(
  QuestionConnection.resolvers,
  Question.resolvers,
  CategoryConnection.resolvers,
  Category.resolvers,
  DateTime.resolvers,
  User.resolvers,
  createUserMutation.resolvers,
  authorizeMutation.resolvers,
  usersQuery.resolvers,
  authorizedUserQuery.resolvers,
  PageInfo.resolvers,
  OrderDirection.resolvers,
  UserConnection.resolvers,
  createCategoryMutation.resolvers,
  deleteCategoryMutation.resolvers,
  categoryQuery.resolvers,
  categoriesQuery.resolvers,
  createQuestionMutation.resolvers,
  deleteQuestionMutation.resolvers,
  Answer.resolvers,
  questionQuery.resolvers,
  Collection.resolvers,
  CollectionConnection.resolvers,
  collectionsQuery.resolvers,
  addToCollection.resolvers,
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
