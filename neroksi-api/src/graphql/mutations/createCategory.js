import { gql, ApolloError } from 'apollo-server'
import * as yup from 'yup'
import { v4 as uuid } from 'uuid'
import Category from '../../models/Category'

export const typeDefs = gql`
  input CreateCategoryInput {
    categoryTitle: String
  }

  extend type Mutation {
    createCategory(category: CreateCategoryInput): Category
  }
`

const argsSchema = yup.object().shape({
  category: yup.object().shape({
    categoryTitle: yup
      .string()
      .max(2000)
      .trim(),
  }),
})

export const resolvers = {
  Mutation: {
    createCategory: async (obj, args, { authService }) => {
      
      const authorizedUser = await authService.getAuthorizedUserOrFail()

      const { category } = await argsSchema.validate(args, {
        stripUnknown: true,
      })

      return Category.query().insertAndFetch({
        id: uuid(),
        userId: authorizedUser.id,
        categoryTitle: category.categoryTitle
      })
    },
  },
}

export default {
  typeDefs,
  resolvers,
}
