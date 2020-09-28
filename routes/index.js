const examRoutes = require('./exam')
const laboratoryRoutes = require('./laboratory')
const examLaboratoryRoutes = require('./examLaboratory')


module.exports = app => {
  examRoutes(app)
  laboratoryRoutes(app)
  examLaboratoryRoutes(app)
}