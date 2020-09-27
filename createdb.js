const db = require('./db')

const exam = require('./db/models/exam')
const laboratory = require('./db/models/laboratory')
const examLaboratory = require('./db/models/examLaboratory')

const createDb = async () => {
  await exam.create(db)
  await laboratory.create(db)
  await examLaboratory.create(db)
}

createDb();