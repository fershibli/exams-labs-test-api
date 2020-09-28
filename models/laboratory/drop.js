const db = require('../../db')

module.exports = () => db
.query('DROP TABLE laboratory;')
.then(res => db
  .query('DROP TYPE laboratory_status;')
  .then(res => console.log('Successfuly droped model laboratory!'))
  .catch(err => console.error('ERROR ON drop TYPE laboratory_status\n\n'+err.stack))
)
.catch(err => console.error('ERROR ON drop TABLE laboratory\n\n'+err.stack))