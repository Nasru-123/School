import { Model } from 'objection';
import dotenv from 'dotenv';
dotenv.config()
// import knexConnection from '../config/database';
import Knex from 'knex'

let knex = Knex({
  client: 'pg',
  connection: {
    database: 'SCHOOL_DB',
    user: 'postgres',
    password: 'root',
    port: 5432,
    host: 'localhost'

  }

});
Model.knex(knex)

export default Model;