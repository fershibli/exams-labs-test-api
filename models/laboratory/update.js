const db = require('../../db')
//this module is a promise that returns the result of the query when it'ss done
module.exports = async (id, name, address, status) => {
  //select the laboratory object
  const laboratory = await db
    .query(`
      SELECT * FROM laboratory
      WHERE id = $1;
    `, [id])
    .then(res => {
      if (res.rows.length == 0) {
        throw new Error('Laboratory not found.')
      }
      return res.rows[0]
    })
    .catch(err => {
      throw err
    })

  let query_string = 'UPDATE laboratory SET '
  const values = [id]
  if (name) {
    values.push(name);
    query_string += 'name = $'+values.length+' ,'
  }
  if (address) {
    values.push(address);
    query_string += 'address = $'+values.length+' ,'
  }
  if (status) {
    values.push(status);
    query_string += 'status = $'+values.length+' ,'
  }
  query_string = query_string.slice(0, -1) //removes remaining comma
  query_string += 'WHERE id = $1 RETURNING *;'

  console.log(query_string)

  return await db
    .query(query_string,values)
    .then(res => res)
    .catch(err => {
      throw err
    })
}