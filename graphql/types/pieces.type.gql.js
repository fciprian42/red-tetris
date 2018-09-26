import {
  GraphQLInt as Int,
  GraphQLObjectType as ObjectType,
  GraphQLList as List,
  GraphQLString as String
} from 'graphql'

export const Pieces = new ObjectType({
  name: 'pieces',
  fields: () => ({
    id_piece: { type: Int },
    shape: { type: List, defaultValue: [] },
    color: { type: String, defaultValue: 'black' },
    positionX: { type: Int, defaultValue: 0 },
    positionY: { type: Int, defaultValue: 0 }
  })
})
