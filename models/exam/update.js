//this module is a promise that returns the result of the query when it'ss done
module.exports = async (db, id, name, type, status) => {
  //select the exam object
  const exam = await db
    .query(`
      SELECT * FROM exam
      WHERE id = $1;
    `, [id])
    .then(res => {
      if (res.rows.length == 0) {
        throw new Error('Exam not found.')
      }
      return res.rows[0]
    })
    .catch(err => {
      throw err
    })

  let query_string = 'UPDATE exam SET '
  const values = [id]
  if (name) {
    values.push(name);
    query_string += 'name = $'+values.length+' ,'
  }
  if (type) {
    values.push(type);
    query_string += 'type = $'+values.length+' ,'
  }
  if (status) {
    values.push(status);
    query_string += 'status = $'+values.length+' ,'
  }
  query_string = query_string.slice(0, -1) //removes remaining comma
  query_string += 'WHERE id = $1;'

  console.log(query_string)

  return await db
    .query(query_string,query_values)
    .then(res => res)
    .catch(err => {
      throw err
    })
}