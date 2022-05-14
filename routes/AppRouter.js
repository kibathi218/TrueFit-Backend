const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const FoodDiaryRouter = require('./FoodDiaryRouter')
const UserRouter = require('./UserRouter')
const FoodRouter = require('./FoodRouter')

Router.use('/auth', AuthRouter)
Router.use('/food-diary', FoodDiaryRouter)
Router.use('/user', UserRouter)
Router.use('/foods', FoodRouter)

module.exports = Router