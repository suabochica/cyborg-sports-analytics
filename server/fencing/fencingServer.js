var express = require('express')
var express_graphql = require('express-graphql')
var mysql = require('mysql');
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

/* local MySQL database connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'bos_user',
  password: 'bos_password',
  database: 'esgrima',
  insecureAuth : true
})

connection.connect(function(error) {
  if (error) throw error

  console.log("Data base connected from node!");
});

connection.query('SELECT * FROM accion_reaccion', function(error, result, fields){
  if (error) throw error

  console.log(result);
});
*/
app.use ('/graphql', express_graphql({
  schema: gqlSchema,
  rootValue: gqlRoot,
  graphiql: true
}))

app.listen(
  4000,
  () => console.log('Express GraphQL Server Running at localhost:4000/graphql')
)