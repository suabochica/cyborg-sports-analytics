var express = require('express')
var express_graphql = require('express-graphql')
var { buildSchema } = require('graphql')
var cors = require('cors')
var Champion = require('./championModel')

var gqlSchema = buildSchema(`
  type Query {
    getChampions: [Champion]
    getChampionByName(name: String!): Champion
  }

  type Mutation {
    updateAttackDamage(name: String!, attackDamage: Float): Champion
  }

  type Champion {
    name: String
    attackDamage: Float
  }
`)

const champions = [
  new Champion('Ashe', 100),
  new Champion('Vayne', 200),
  new Champion('Andy', 300)
]

var gqlRoot = {
  getChampions: () => champions,

  getChampionByName: ({ name }) => {
    return champions.find(champion => champion.name === name)
  },

  updateAttackDamage: ({ name, attackDamage = 150 }) => {
    const champion = champions.find(champion => champion.name === name)
    champion.attackDamage = attackDamage

    return champion
  }
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