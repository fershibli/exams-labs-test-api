const { Pool } = require('pg')

const pool = new Pool({
    user: 'dasatest',
    host: 'localhost',
    database: 'dasatest',
    password: 'postgres@PSQL.123',
    port: 5432,
  })

module.exports = {
  query: (text, params) => pool.query(text, params),
}