import {
  GraphQLNonNull as NonNull,
  GraphQLInt as Int,
  GraphQLString as String
} from 'graphql'

import { Users } from '../types/users.type.gql'

import knex from '../knex'

export const createUser = {
  type: Users,
  description: 'Create a new user',
  args: {
    username: { type: new NonNull(String) }
  },
  resolve: async (value, args) => {
    const users = await knex.select('*')
      .from('users')
      .where('username', args.username)
      .first()

    if (users) { return null }

    knex('users').insert({ username: args.username })
  }
}

export const updateUser = {
  type: Users,
  description: 'Update a user',
  args: {
    id_user: { type: new NonNull(Int) }
  },
  resolve: async (value, args) => {
    const users = await knex.select('*')
      .from('users')
      .where('id_user', args.id_user)
      .first()

    if (!users) { return null }

    knex('users').where('id_user', args.id_user).update(args)
  }
}

export const deleteUser = {
  type: Users,
  description: 'Delete a user',
  args: {
    id_user: { type: new NonNull(Int) }
  },
  resolve: async (value, args) => {
    const users = await knex.select('*')
      .from('users')
      .where('id_user', args.id_user)
      .first()

    if (!users) { return null }

    knex('users').where('id_user', args.id_user).del()
  }
}
