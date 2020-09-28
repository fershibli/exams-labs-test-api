const laboratoryModel = require('../../models/laboratory')

//this does not delete db entry, just updates status field to 'inativo' (inactive)
module.exports = id => {
  return laboratoryModel.update(id, null, null, 'inativo')
}