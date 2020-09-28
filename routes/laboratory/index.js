const { Router } = require('express')
const laboratoryGetRoutes = require('./get')
const laboratoryPostRoutes = require('./post')
const laboratoryPutRoutes = require('./put')
const laboratoryDeleteRoutes = require('./delete')

module.exports = app => {
  const laboratoryRouter = Router()

  laboratoryGetRoutes(laboratoryRouter)
  laboratoryPostRoutes(laboratoryRouter)
  laboratoryPutRoutes(laboratoryRouter)
  laboratoryDeleteRoutes(laboratoryRouter)

  app.use('/laboratory', laboratoryRouter)
}