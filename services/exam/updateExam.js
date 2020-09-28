const examModel = require('../../models/exam')

module.exports = (id, name, type, status) => {
  return examModel.update(id, name, type, status)
}