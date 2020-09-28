const exam = require('./models/exam')
const laboratory = require('./models/laboratory')
const examLaboratory = require('./models/examLaboratory')

const createDb = async () => {
  await exam.create()
  await laboratory.create()
  await examLaboratory.create()
}

createDb();