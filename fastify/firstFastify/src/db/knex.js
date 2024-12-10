import Knex from "knex";
import { Model } from 'objection';

const dbConfig = {
  debug: true,
  client: "mssql",
  connection: {
    host: "localhost",
    port: 1433,
    user: "sa",
    database: "test",
    password: "Abcd1234",
    requestTimeout: 300000,
  },
};

const knex = Knex(dbConfig);
Model.knex(knex);

export default knex;
