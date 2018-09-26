import {
  GraphQLInt as Int,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
  GraphQLString as String
} from 'graphql'

export const Users = new ObjectType({
  name: 'users',
  fields: () => ({
    id_user: { type: new NonNull(Int) },
    username: { type: new NonNull(String) },
    password: { type: new NonNull(String) }
    // created_at: { type: new NonNull(Date) }
  })
})
