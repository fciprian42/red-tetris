import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType
} from 'graphql';

import { getUsers } from "./queries/users.query.gql";

const graphqlSchema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      getUsers
    }
  })
});

export default graphqlSchema;