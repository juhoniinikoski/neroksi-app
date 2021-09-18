const { makeExecutableSchema, gql, UserInputError } = require('apollo-server-express')
const Question = require('../models/question')
const User = require('../models/user')
const Category = require('../models/category')
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'NEED_HERE_A_SECRET_KEY'


const typeDefs = gql`
  type Question {
    questionTitle: String!
    id: ID!
    answers: [String!]
    category: Category!
  }

  type Category {
    categoryTitle: String!
    id: ID!
    questions: [Question!]!
  }
  
  enum YesNo {
    YES
    NO
  }

  type User {
    username: String!
    followedCategories: [Category!]!
    id: ID!
  }
  
  type Token {
    value: String!
  }

  type Query {
    categoryCount: Int!
    allCategories: [Category!]!
    allQuestions: [Question!]!
    findCategory(categoryTitle: String!): Category
    findQuestion(id: ID!): Question
    me: User
  }

  type Mutation {
    addCategory(
      categoryTitle: String!
    ): Category
    addQuestion(
      questionTitle: String!
      categoryID: ID!
    ): Question
    createUser(
      username: String!
    ): User
    login(
      username: String!
      password: String!
    ): Token
    addAsFavourite(
      categoryTitle: String!
    ): User
  }  
`

const resolvers = {
  Query: {
    categoryCount: () => Category.collection.countDocuments(),
    allCategories: () => Category.find({}).populate('questions'),
    allQuestions: () => Question.find({}).populate('category'),
    findCategory: (root, args) => Category.findOne({ categoryTitle: args.categoryTitle }),
    findQuestion: (root, args) => Category.findOne({ _id: args.id }),
    me: (root, args, context) => {
      return context.currentUser
    }
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

    addQuestion: async (root, args, context) => {
      const category = await Category.findById(args.categoryID)
      const question = new Question({ ...args, category: category })
      const currentUser = context.currentUser
  
      if (!currentUser) {
        throw new AuthenticationError("not authenticated")
      }
  
      try {
        await question.save()
        category.questions = category.questions.concat(question)
        category.save()
      } catch (error) {
        throw new UserInputError(error.message, {
          invalidArgs: args,
        })
      }
  
      return question.populate('category')
    },

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
    },
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

module.exports = schema