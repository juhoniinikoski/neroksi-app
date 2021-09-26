import { gql } from 'apollo-server'
import * as yup from 'yup'
import Category from '../../models/Category'

export const typeDefs = gql`
  extend type Query {
    """
    Returns paginated users.
    """
    categories(first: Int, after: String): CategoryConnection!
  }
`

const argsSchema = yup.object({
  after: yup.string(),
  first: yup
    .number()
    .min(1)
    .max(30)
    .default(30),
})

export const resolvers = {
  Query: {
    categories: async (obj, args) => {

      const { first, after } = await argsSchema.validate(args)

      return Category.query().cursorPaginate({
        orderBy: [{ column: 'createdAt', order: 'desc' }, 'id'],
        first,
        after,
      })
    },
  },
}

export default {
  typeDefs,
  resolvers,
}
