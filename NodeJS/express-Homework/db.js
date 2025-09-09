//init Connection for DB And Pool
// init Pool

const { Pool } = require('pg');
require('dotenv').config({path: __dirname + "/.env"});

const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
};
