const exam = require('./models/exam')
const laboratory = require('./models/laboratory')
const examLaboratory = require('./models/examLaboratory')

const dropDb = async () => {
  await examLaboratory.drop()
  await exam.drop()
  await laboratory.drop()
}

dropDb();