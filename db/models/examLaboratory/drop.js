module.exports = db => db
.query('DROP TABLE exam_laboratory;')
.then(res => console.log('Successfuly created model exam_laboratory!'))
.catch(err => console.error('ERROR ON drop TABLE exam_laboratory\n\n'+err.stack))