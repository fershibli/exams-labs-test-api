const laboratoryModel = require('../../models/laboratory')

module.exports = (id, name, address, status) => {
  return laboratoryModel.update(id, name, address, status)
}