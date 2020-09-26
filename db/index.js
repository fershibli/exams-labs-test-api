const { Pool } = require('pg')

const pool = new Pool({
    user: 'datatest',
    host: 'localhost',
    database: 'datatest',
    password: 'postgres@PSQL.123',
    port: 5432,
  })

module.exports = {
  query: (text, params) => pool.query(text, params),
}