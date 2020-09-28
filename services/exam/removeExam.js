const examModel = require('../../models/exam')

//this does not delete db entry, just updates status field to 'inativo' (inactive)
module.exports = id => {
  return examModel.update(id, null, null, 'inativo')
}