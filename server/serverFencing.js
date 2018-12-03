var express = require('express')
var express_graphql = require('express-graphql')
var { buildSchema } = require('graphql')

var gqlSchema = buildSchema(`
  type Query {
    message: String
  }
`)

var gqlRoot = {
  message: () => 'Hello World!'
}

var app = express()

app.use ('/graphql', express_graphql({
  schema: gqlSchema,
  rootValue: gqlRoot,
  graphiql: true
}))

app.listen(
  4000,
  () => console.log('Express GraphQL Server Running at localhost:4000/graphql')
)