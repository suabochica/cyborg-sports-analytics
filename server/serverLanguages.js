var express = require('express')
var express_graphql = require('express-graphql')
var { buildSchema } = require('graphql')
var cors = require('cors')
var Champion = require('./champion')

var gqlSchema = buildSchema(`
  type Query {
    language: String
    getChampions: [Champion]
  }

  type Champion {
    name: String
    attackDamage: Float
  }
`)

const champions = [
  new Champion('Ashe', 100),
  new Champion('Vayne', 200)
]

var gqlRoot = {
  language: () => 'Hello World GraphQL!',
  getChampions: () => champions
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