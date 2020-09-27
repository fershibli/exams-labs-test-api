const examsRoutes = require('./exams')

module.exports = app => {
  examsRoutes(app)
}