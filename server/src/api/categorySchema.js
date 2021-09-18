const { gql } = require('apollo-server-express')
const Category = require('../models/category')

const typeDefs = gql`

  type Category {
    categoryTitle: String!
    id: ID!
    questions: [Question!]!
  }

  extend type Mutation {
    addCategory(
      categoryTitle: String!
    ): Category
    addAsFavourite(
      categoryTitle: String!
    ): User
  }
  
  extend type Query {
    categoryCount: Int!
    allCategories: [Category!]!
    findCategory(categoryTitle: String!): Category
  }
`
const resolvers = {
  Query: {
    categoryCount: () => Category.collection.countDocuments(),
    allCategories: () => Category.find({}).populate('questions'),
    findCategory: (root, args) => Category.findOne({ categoryTitle: args.categoryTitle })
  },

  Mutation: {
    addCategory: async (root, args, context) => {
      const category = new Category({ ...args })
      const currentUser = context.currentUser
  
      if (!currentUser) {
        throw new AuthenticationError("not authenticated")
      }
  
      try {
        await category.save()
      } catch (error) {
        throw new UserInputError(error.message, {
          invalidArgs: args,
        })
      }
  
      return category
    },

    addAsFavourite: async (root, args, { currentUser }) => {
      const notAddedAlready = (category) => 
        !currentUser.followedCategories.map(c => c._id).includes(category._id)
  
      if (!currentUser) {
        throw new AuthenticationError("not authenticated")
      }
  
      const category = await Category.findOne({ categoryTitle: args.categoryTitle }).populate('questions')
      if ( notAddedAlready(category) ) {
        currentUser.followedCategories = currentUser.followedCategories.concat(category)
      }
  
      await currentUser.save()
  
      return currentUser
    }
  }
}

module.exports = { typeDefs, resolvers }