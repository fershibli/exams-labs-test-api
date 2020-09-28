const db = require('../../db')
/* query_terms expects to receive an object 
which keys matches the column names, and values matches the values to search
  example:
    {
      'name': 'labszs',
      'status': 'active'
    }
  this will search for active labszs laboratories
*/ 

//this module returns a promise of the query
module.exports = query_terms => {
  let query = 'SELECT * FROM laboratory WHERE '
  Object.keys(query_terms).forEach((key, i, arr) =>{
    query += key+' = $'+(i+1)
    
    if (i+1 < arr.length){
      query += ' AND '
    }
      
  })
  query += ';'
  console.log(query);
  return db.query(query, Object.values(query_terms))
}