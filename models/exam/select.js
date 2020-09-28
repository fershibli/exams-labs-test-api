const db = require('../../db')
/* query_terms expects to receive an object 
which keys matches the column names, and values matches the values to search
  example:
    {
      'name': 'blood analysis',
      'status': 'active'
    }
  this will search for active blood analysis exams
*/ 

//this module returns a promise of the query
module.exports = query_terms => {
  let query = 'SELECT * FROM exam WHERE '
  Object.keys(query_terms).forEach((key, i, arr) =>{
    query += key+' = $'+i
    if (i < arr.length) query += ' AND '
  })
  query += ';'
  console.log(query);
  return db.query(query, Object.values)
}