var express = require('express')
var express_graphql = require('express-graphql')
var { buildSchema } = require('graphql')
var cors = require('cors')

var gqlSchema = buildSchema(`
  type Query {
    language: String
  }
`)

var gqlRoot = {
  language: () => 'Hello World GraphQL!'
}

var app = express()

app.use(cors())

app.use ('/graphql', express_graphql({
  schema: gqlSchema,
  rootValue: gqlRoot,
  graphiql: true
}))

app.listen(
  4000,
  () => console.log('Express GraphQL Server Running at localhost:4000/graphql')
)