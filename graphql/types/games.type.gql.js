import {
  GraphQLObjectType as ObjectType,
  GraphQLBoolean as Boolean,
  GraphQLList as List,
  GraphQLString as String
} from 'graphql'

import { Pieces } from './pieces.type.gql'
import { Users } from './users.type.gql'

export const Games = new ObjectType({
  name: 'games',
  fields: () => ({
    room: { type: String },
    isOver: { type: Boolean, defaultValue: false },
    isStarted: { type: Boolean, defaultValue: false },
    pieces: { type: List(Pieces) },
    players: { type: List(Users) }

  })
})
