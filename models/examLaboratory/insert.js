const db = require('../../db')
//this module returns a promise of the query
module.exports = (exam_id, laboratory_id) => {
  //TODO: verify if relation already exists
  return db
    .query(`
      INSERT INTO 
      exam_laboratory (
        exam_id,
        laboratory_id
      ) VALUES (
        $1,
        $2
      ) RETURNING *;
    `, [exam_id, laboratory_id])
}