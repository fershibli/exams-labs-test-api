const { Pool } = require('pg')
const config = require('../config');

const pool = new Pool(null || config.get('db.credentials'))

module.exports = {
  query: (text, params) => pool.query(text, params),
}