import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({
      dataIdFromObject: o => (o._id ? `${o.__typename}:${o._id}`: null),
    })
  });
};

export default createApolloClient;