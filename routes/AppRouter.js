const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const FoodDiaryRouter = require('./FoodDiaryRouter')
const UserRouter = require('./UserRouter')

Router.use('/auth', AuthRouter)
Router.use('/food-diary', FoodDiaryRouter)
Router.use('/user', UserRouter)

module.exports = Router