const { gql } = require('apollo-server-express')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

const JWT_SECRET = config.JWT_SECRET

const typeDefs = gql`

  type User {
    username: String!
    followedCategories: [Category!]!
    id: ID!
  }

  type Token {
    value: String!
  }

  type Mutation {
    createUser(
      username: String!
    ): User
    login(
      username: String!
      password: String!
    ): Token
  }

  type Query {
    me: User
  }
`
const resolvers = {
  Query: {

    me: (root, args, context) => {
      return context.currentUser
    }
  },

  Mutation: {

    createUser: (root, args) => {
      const user = new User({ username: args.username })
  
      return user.save()
        .catch(error => {
          throw new UserInputError(error.message, {
            invalidArgs: args,
          })
        })
    },

    login: async (root, args) => {

      const user = await User.findOne({ username: args.username })
  
      if ( !user || args.password !== 'secret' ) {
        throw new UserInputError("wrong credentials")
      }
  
      const userForToken = {
        username: user.username,
        id: user._id,
      }
  
      return { value: jwt.sign(userForToken, JWT_SECRET) }
    }
  }
}

module.exports = { typeDefs, resolvers }