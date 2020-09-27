const bodyParser = require('body-parser')
const compression = require('compression')
const express = require('express')

const app = express()


app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(compression)