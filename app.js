const bodyParser = require('body-parser')
const compression = require('compression')
const express = require('express')
const routes = require('./routes');

const app = express()
const port = 3000



app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(compression)

routes(app)

app.listen(port)