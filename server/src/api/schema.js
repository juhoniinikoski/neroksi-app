const { makeExecutableSchema } = require('apollo-server-express')
const { typeDefs: User, resolvers: userResolvers } = require('./userSchema')
const { typeDefs: Category, resolvers: categoryResolvers } = require('./categorySchema')
const { typeDefs: Question, resolvers: questionResolvers } = require('./questionSchema')
const { merge} = require('lodash')

const schema = makeExecutableSchema({
  typeDefs: [ User, Category, Question ],
  resolvers: merge( userResolvers, categoryResolvers, questionResolvers ),
})

module.exports = schema