const express = require('express')

const app = express();

const { Router: webRoutes } = require('./router')


app.use('/', webRoutes)


module.exports = app

