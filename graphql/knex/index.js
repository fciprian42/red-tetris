import config from '../config'

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: config.pgConfig.host,
    user: config.pgConfig.user,
    password: config.pgConfig.password,
    database: config.pgConfig.database,
    charset: 'utf8'
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.on('error', (err) => {
        console.log('on each error should test if ETNOTFOUND and then update global status ', err)
      })
      conn.on('end', (err) => {
        console.log('knex connection has ended with code : ', err)
      })
      done()
    },
    max: config.pgConfig.max,
    min: 2,
    idleTimeoutMillis: config.pgConfig.idleTimeoutMillis,
    acquireConnectionTimeout: 10000
  }
})

export default knex
