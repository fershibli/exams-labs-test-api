const laboratoryModel = require('../../models/laboratory')

module.exports = (name, address, status) => {
  return laboratoryModel.insert(name,address,status)

}