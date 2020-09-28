const { Router } = require('express')
const examPostRoutes = require('./post')

module.exports = app => {
  const examRouter = Router()

  examPostRoutes(examRouter)

  app.use('/exam', examRouter)
}