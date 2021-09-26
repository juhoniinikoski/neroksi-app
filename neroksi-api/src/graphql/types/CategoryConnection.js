import { gql } from 'apollo-server'

export const typeDefs = gql`
  type CategoryEdge {
    cursor: String!
    node: Category!
  }

  type CategoryConnection {
    totalCount: Int!
    pageInfo: PageInfo!
    edges: [CategoryEdge!]!
  }
`

export const resolvers = {};

export default {
  typeDefs,
  resolvers,
}
