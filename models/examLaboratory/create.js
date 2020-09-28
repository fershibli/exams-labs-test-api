const db = require('../../db')

module.exports = () => db
// create table laboratory with the enum above as data type
.query(`
  CREATE TABLE exam_laboratory(
    exam_id int REFERENCES exam(id) ON UPDATE CASCADE ON DELETE CASCADE,
    laboratory_id int REFERENCES laboratory(id) ON UPDATE CASCADE,
    CONSTRAINT exam_laboratory_pkey PRIMARY KEY (exam_id, laboratory_id)
  );
`)
.then(res => console.log('Successfuly created model exam_laboratory!'))
.catch(err => console.error('ERROR ON create TABLE exam_laboratory\n\n'+err.stack))