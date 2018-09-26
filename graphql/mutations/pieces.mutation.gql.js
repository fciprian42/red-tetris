import {
  GraphQLNonNull as NonNull,
  GraphQLInt as Int
} from 'graphql'

import knex from '../knex'
import { Pieces } from '../types/pieces.type.gql'

const random = (nb) => Math.floor(Math.random() * nb)

const colors = [
  'pink',
  'red',
  'green',
  'gold',
  'purple',
  'blue',
  'grey'
]

const types = [
  [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
  ],
  [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0]
  ],
  [
    [0, 1, 0],
    [1, 1, 0],
    [0, 1, 0]
  ],
  [
    [0, 1, 0],
    [0, 1, 1],
    [0, 0, 1]
  ],
  [
    [0, 1, 0],
    [1, 1, 0],
    [1, 0, 0]
  ],
  [
    [0, 1, 1],
    [0, 1, 0],
    [0, 1, 0]
  ],
  [
    [1, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
  ]
]

const rotate = (shape) => {
  const newShape = []
  shape.forEach((line, i) => {
    line.forEach((bloc, j) => {
      if (!newShape[j]) newShape[j] = []
      newShape[j][line.length - i - 1] = shape[i][j]
    })
  })
  return newShape
}

export const createPiece = {
  type: Pieces,
  description: 'Create a new piece',
  resolve: () => {
    const piece = {}
    const rotation = random(4)
    const type = random(7)

    piece.shape = types[type]
    piece.color = colors[type]

    for (let i = 0; i <= rotation; i++) piece.shape = rotate(piece.shape)

    piece.positionX = random(7)
    piece.positionY = -piece.shape.length

    knex('pieces').insert(piece)
  }
}

export const deletePiece = {
  type: Users,
  description: 'Delete a user',
  args: {
    id_piece: { type: new NonNull(Int) }
  },
  resolve: async (value, args) => {
    const pieces = await knex.select('*')
      .from('pieces')
      .where('id_piece', args.id_piece)
      .first()

    if (!pieces) { return null }

    knex('pieces').where('id_piece', args.id_piece).del()
  }
}
