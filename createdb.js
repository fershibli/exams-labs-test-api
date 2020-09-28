const db = require('./db')

const exam = require('./models/exam')
const laboratory = require('./models/laboratory')
const examLaboratory = require('./models/examLaboratory')

const createDb = async () => {
  await exam.create(db)
  await laboratory.create(db)
  await examLaboratory.create(db)
}

createDb();