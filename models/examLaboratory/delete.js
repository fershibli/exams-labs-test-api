const db = require('../../db')
//this module returns a promise of the query
module.exports = (exam_id, laboratory_id) => {
  return db
    .query(`
      DELETE FROM exam_laboratory 
      WHERE 
        exam_id = $1 AND
        laboratory_id = $2;
    `, [exam_id, laboratory_id])
}