const express = require('express')
const routes = require('./routes')
const { errorHandler } = require('./middlewares')

const app = express()

app.use('/', routes)
errorHandler.implement(app)

module.exports = app