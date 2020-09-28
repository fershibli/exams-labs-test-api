const db = require('./db')

const exam = require('./models/exam')
const laboratory = require('./models/laboratory')
const examLaboratory = require('./models/examLaboratory')

const dropDb = async () => {
  await examLaboratory.drop(db)
  await exam.drop(db)
  await laboratory.drop(db)
}

dropDb();