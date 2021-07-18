const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const categories = require('./test/test_data.json')
const questions = require('./test/test_data_questions.json')
const cors = require('cors')


// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    allCategories: [Category]
    filterCategories(search: String!): [Category]
    findCategory(id: Int!): Category
    findQuestions(categoryID: Int!): [Question]

  },
  type Category {
    name: String!
    id: ID!
    items: [Item]
  }
  type Item {
    question: String!
    id: ID!
    answers: [Answer!]
  }
  type Question {
    id: ID!
    question: String!
    category: String!
    categoryID: ID!
    correct: ID!
    answers: [Answer!]
  }
  type Answer {
    id: ID!
    ans: String!
    correct: Boolean!
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    // finds all categories for explore
    allCategories: () => categories,
    // filters all categories based on user input
    filterCategories: (root: any, args: any) => categories.filter((category: any) => category.name.includes(args.search)),
    // finds category for exploring questions
    findCategory: (root: any, args: any) =>
      categories.find((c: any) => c.id === args.id),
    // finds a certain question within given category
    findQuestions: (root: any, args: any) =>
      questions.filter((q: any) => q.categoryID === args.categoryID)
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()
server.applyMiddleware({ app })

app.use(cors())

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)