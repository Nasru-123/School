import Knex from 'knex';

const knexConnection = {
  client: 'pg',
  developement: {
    connection: {
      database: process.env.db_name,
      user: process.env.db_user,
      password: process.env.db_password,
      port: process.env.db_port,
      host: process.env.db_host

    }
  },
}

const connection = Knex(knexConnection);

export default connection;