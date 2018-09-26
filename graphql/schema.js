import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType
} from 'graphql'

import { getUsers } from './queries/users.query.gql'
import { createUser, updateUser, deleteUser } from './mutations/users.mutation.gql'

import { createPiece, deletePiece } from './mutations/pieces.mutation.gql'

const graphqlSchema = new Schema({
  mutation: new ObjectType({
    name: 'Mutation',
    fields: {
      createUser,
      updateUser,
      deleteUser,
      createPiece,
      deletePiece
    }
  }),
  query: new ObjectType({
    name: 'Query',
    fields: {
      getUsers
    }
  })
})

export default graphqlSchema
