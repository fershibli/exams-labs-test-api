const db = require('../../db')

module.exports = () => db
.query('DROP TABLE exam;')
.then(res => db
  .query('DROP TYPE exam_status;')
  .then(res => db
    .query('DROP TYPE exam_type;')
    .then(res => console.log('Successfuly droped model exam!'))
    .catch(err => console.error('ERROR ON drop TYPE exam_type\n\n'+err.stack))
  )
  .catch(err => console.error('ERROR ON drop TYPE exam_status\n\n'+err.stack))
)
.catch(err => console.error('ERROR ON drop TABLE exam\n\n'+err.stack))