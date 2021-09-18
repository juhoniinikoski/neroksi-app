const { gql } = require('apollo-server-express')
const Question = require('../models/question')
const Category = require('../models/category')

const typeDefs = gql`
  type Question {
    questionTitle: String!
    id: ID!
    answers: [String!]
    category: Category!
  }

  extend type Mutation {
    addQuestion(
      questionTitle: String!
      categoryID: ID!
    ): Question
  }

  extend type Query {
    allQuestions: [Question!]!
    findQuestion(id: ID!): Question
  }
`
const resolvers = {
  Query: {
    allQuestions: () => Question.find({}).populate('category'),
    findQuestion: (root, args) => Category.findOne({ _id: args.id }),
  },

  Mutation: {
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
    }
  }
}

module.exports = { typeDefs, resolvers }