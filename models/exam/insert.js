const db = require('../../db')
//this module returns a promise of the query
module.exports = (name, type, status) => {
  let query_string = `
    INSERT INTO 
    exam(
      name,
      type`
  if (status) {
    query_string += ',status'
  }
  query_string += `
  ) VALUES(
    $1,
    $2
  `
  if (status) {
    query_string += ',$3'
  }
  query_string += ') RETURNING id;'
  console.log(query_string)
  
  const query_values = [name, type]
  if (status) {
    query_values.push(status)
  }

  return db.query(query_string,query_values)
}