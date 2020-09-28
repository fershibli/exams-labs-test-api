const examLaboratoryModel = require('../../models/examLaboratory')

module.exports = (exam_id, laboratory_id) => {
  return examLaboratoryModel.delete(exam_id, laboratory_id)
}