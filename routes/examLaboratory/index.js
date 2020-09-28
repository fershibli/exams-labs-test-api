const { Router } = require('express')
const examLaboratoryPostRoutes = require('./post')
const examLaboratoryDeleteRoutes = require('./delete')

module.exports = app => {
  const examLaboratoryRouter = Router()

  examLaboratoryPostRoutes(examLaboratoryRouter)
  examLaboratoryDeleteRoutes(examLaboratoryRouter)

  app.use('/exam-laboratory', examLaboratoryRouter)
}