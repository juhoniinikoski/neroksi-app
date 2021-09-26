import { gql } from 'apollo-server'

export const typeDefs = gql`
  extend type Query {
    """
    Returns category by an id.
    """
    category(id: ID!): Category
  }
`

export const resolvers = {
  Query: {
    category: async (obj, args, { dataLoaders: { categoryLoader } }) =>
      categoryLoader.load(args.id),
  },
}

export default {
  typeDefs,
  resolvers,
}
