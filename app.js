const express = require('express')
const routes = require('./routes')
const middleware = require('./middlewares')

const app = express()

app.use('/', routes)
middleware.exception.errorHandler(app)

module.exports = app