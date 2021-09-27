import { gql } from 'apollo-server'

export const typeDefs = gql`
type Answer {
  id: ID!
  answer: String!
  correct: Boolean!
}
`

export const resolvers = {}

export default {
  typeDefs,
  resolvers,
}
