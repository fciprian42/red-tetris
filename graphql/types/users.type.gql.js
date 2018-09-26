import {
  GraphQLInt as Int,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
  GraphQLBoolean as Boolean,
  GraphQLList as List,
  GraphQLString as String
} from 'graphql'

export const Users = new ObjectType({
  name: 'users',
  fields: () => ({
    id_user: { type: new NonNull(Int) },
    username: { type: new NonNull(String) },
    score_global: { type: Int, defaultValue: 0 },
    score_game: { type: Int, defaultValue: 0 },
    is_disconnected: { type: Boolean, defaultValue: false },
    current_piece: { type: Int, defaultValue: 0 },
    looser: { type: Boolean, defaultValue: false },
    winner: { type: Boolean, defaultValue: false },
    malus: { type: Int, defaultValue: 0 },
    spectre: { type: List(Int), defaultValue: [] },
    socketId: { type: String, defaultValue: '' },
    gameId: { type: String, defaultValue: '' }
  })
})
