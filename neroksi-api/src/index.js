import { ApolloServer, toApolloError, ApolloError } from 'apollo-server';
import schema from './graphql/schema';
import logger from './utils/logger';
import { ValidationError } from 'yup';
import AuthService from './services/authentication/authService';
import createDataLoaders from './services/loaders/createDataLoaders';

const apolloErrorFormatter = (error) => {
  logger.error(error);

  const { originalError } = error;
  const isGraphQLError = !(originalError instanceof Error);

  let normalizedError = new ApolloError(
    'Something went wrong',
    'INTERNAL_SERVER_ERROR',
  );

  if (originalError instanceof ValidationError) {
    normalizedError = toApolloError(error, 'BAD_USER_INPUT');
  } else if (error.originalError instanceof ApolloError || isGraphQLError) {
    normalizedError = error;
  }

  return normalizedError;
};

const server = new ApolloServer({
  schema: schema,
  formatError: apolloErrorFormatter,
  context: ({ req }) => {
    const authorization = req.get('authorization');

    const accessToken = authorization ? authorization.split(' ')[1] : undefined;
    const dataLoaders = createDataLoaders();

    return {
      authService: new AuthService({
        accessToken,
        dataLoaders,
      }),
      dataLoaders,
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}graphql`);
});
