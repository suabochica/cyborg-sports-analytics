import Express from 'express';
import GraphHTTP from 'express-graphql';

// Config
const APP_PORT = 3000;

// Start
const app = Express();

// GraphQL
app.use('/graphql', GraphHTTP({
  pretty: true,
  graphiql: true,
}));

app.listen(APP_PORT, () => {
  console.log(`App listening on port ${APP_PORT}`);
});