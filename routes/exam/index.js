const { Router } = require('express')
const examGetRoutes = require('./get')
const examPostRoutes = require('./post')
const examPutRoutes = require('./put')
const examDeleteRoutes = require('./delete')

module.exports = app => {
  const examRouter = Router()

  examGetRoutes(examRouter)
  examPostRoutes(examRouter)
  examPutRoutes(examRouter)
  examDeleteRoutes(examRouter)

  app.use('/exam', examRouter)
}