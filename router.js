const Router = require('express').Router()
const controllers = require('./controllers')

Router.get('/', controllers.home)

exports.Router = Router