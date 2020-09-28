const db = require('../../db')
const examModel = require('../../models/exam')

module.exports = (name, type, status) => {
  return examModel.insert(db, name, type, status)
}