const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const categories = require('./test/test_data.json')

console.log(categories.map((c: any) => c.items.map((q: any) => q)))

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    categories: [Category]
    findCategory(id: Int!): Category
  },
  type Category {
    name: String!
    id: ID!
  }
  type Item {
    question: String!
    id: ID!
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    categories: () => categories,
    findCategory: (root: any, args: any) =>
      categories.find((c: any) => c.id === args.id)
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()
server.applyMiddleware({ app })

app.get('/', (req: any, res: any) => res.send('Express + GraphQL + TypeScript Server'));

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)