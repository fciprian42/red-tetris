import express from 'express';
import express_graphql from 'express-graphql';
import graphqlSchema from 'graphql/schema';

const app = express();

app.use('/graphql', express_graphql({
  schema: graphqlSchema,
  graphiql: true
}));

app.listen(4000);