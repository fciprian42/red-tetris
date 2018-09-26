import bookshelf from 'bookshelf';

import config from '../config';

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: config.pgConfig.host,
    user: config.pgConfig.user,
    password: config.pgConfig.password,
    database: config.pgConfig.database,
    charset: 'utf8',
  },
  pool: {
    max: config.pgConfig.max,
    min: 2,
    idleTimeoutMillis: config.pgConfig.idleTimeoutMillis,
    acquireConnectionTimeout: 10000,
  }
});

const Bookshelf = bookshelf(knex);

export default Bookshelf;