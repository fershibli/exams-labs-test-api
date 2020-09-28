const examModel = require('../../models/exam')

module.exports = () => {
  return examModel.select({status: 'ativo'})
}