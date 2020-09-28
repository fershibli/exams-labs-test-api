const db = require('./db')

const exam = require('./db/models/exam')
const laboratory = require('./db/models/laboratory')
const examLaboratory = require('./db/models/examLaboratory')

const dropDb = async () => {
  await examLaboratory.drop(db)
  await exam.drop(db)
  await laboratory.drop(db)
}

dropDb();