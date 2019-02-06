const Express = require('express')
const GraphHTTP = require('express-graphql')
const cors = require('cors')

const Schema = require('./blogSchema')

// Create the Server. Minute 26:46 of the video.
// Config
const APP_PORT = 4000

// Start
const app = Express()

app.use(cors())

// Initialize GraphQL with GraphHTTP middleware passing the schema as a properties.
app.use('/graphql', GraphHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true,
}));

// Expose the server
app.listen(APP_PORT, () => {
  console.log(`App listening on port ${APP_PORT}`)
});