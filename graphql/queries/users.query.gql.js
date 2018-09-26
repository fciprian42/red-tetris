import {
  GraphQLInt as Int,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
  GraphQLString as String
} from 'graphql';

import { Users} from "../types/users.type.gql";

export const getUsers = {
  type: Users,
  description: "Return all users",
  args: {},
  resolve: (value) => {

  }
};