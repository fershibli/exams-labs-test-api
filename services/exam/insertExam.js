const examModel = require('../../models/exam')

module.exports = (name, type, status) => {
  return examModel.insert(name, type, status)
}