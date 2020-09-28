const { Router } = require('express')
const examGetRoutes = require('./get')
const examPostRoutes = require('./post')
const examPutRoutes = require('./put')

module.exports = app => {
  const examRouter = Router()

  examGetRoutes(examRouter)
  examPostRoutes(examRouter)
  examPutRoutes(examRouter)

  app.use('/exam', examRouter)
}