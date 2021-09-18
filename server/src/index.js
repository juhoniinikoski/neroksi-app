const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const schema = require('./api/schema')
const app = require('./app')
const jwt = require('jsonwebtoken')
const User = require('./models/user')

const JWT_SECRET = 'NEED_HERE_A_SECRET_KEY'

const server = new ApolloServer({ schema, context: async ({ req }) => {
  const auth = req ? req.headers.authorization : null
  if (auth && auth.toLowerCase().startsWith('bearer ')) {
    const decodedToken = jwt.verify(
      auth.substring(7), JWT_SECRET
    )
    const currentUser = await User
      .findById(decodedToken.id).populate({
        path: 'followedCategories',
        populate: { path: 'questions' }
      })
    return { currentUser }
  }}
})

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)