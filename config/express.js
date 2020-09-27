const bodyParser = require('body-parser')
const compression = require('compression')
const config = require('config')
const express = require('express')

module.exports = () => {
  const app = express()

  //set app variables
  app.set('port', process.env.PORT || config.get('server.port'));

  //use middlewares
  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )
  app.use(compression)

  return app
}
