import { Users } from '../types/users.type.gql'

import knex from '../knex'

export const getUsers = {
  type: Users,
  description: 'Return all users',
  resolve: async () => {
    const users = await knex.select('*').from('users').then(res => {
      if (res) { return res[0] }
    })
    return users
  }
}
