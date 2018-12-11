var express = require('express')
var express_graphql = require('express-graphql')
var { buildSchema } = require('graphql')
var mysql = require('mysql');

var gqlSchema = buildSchema(`
  type Query {
    message: String
  }
`)

var gqlRoot = {
  message: () => 'Hello World!'
}

var app = express()

// local MySQL database connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'esgrima'
})

connection.connect(function(error) {
  if (error) throw error;
});

app.use ('/graphql', express_graphql({
  schema: gqlSchema,
  rootValue: gqlRoot,
  graphiql: true
}))

app.listen(
  4000,
  () => console.log('Express GraphQL Server Running at localhost:4000/graphql')
)