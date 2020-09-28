const laboratoryModel = require('../../models/laboratory')

module.exports = () => {
  return laboratoryModel.select({status: 'ativo'})
}