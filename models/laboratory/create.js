const db = require('../../db')

module.exports = () => db
// create enum for laboratory status
.query(`
  CREATE TYPE laboratory_status AS ENUM (
    'ativo', 'inativo'
  );
`)
.then(res => db
  // create table laboratory with the enum above as data type
  .query(`
    CREATE TABLE laboratory(
      id SERIAL PRIMARY KEY,
      name VARCHAR(512) NOT NULL,
      address VARCHAR(1024) NOT NULL,
      status laboratory_status DEFAULT 'ativo'
    );
  `)
  .then(res => console.log('Successfuly created model laboratory!'))
  .catch(err => console.error('ERROR ON create TABLE laboratory\n\n'+err.stack)),
)
.catch(err => console.error('ERROR ON create ENUM laboratory_status\n\n'+err.stack))