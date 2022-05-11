const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const FoodDiaryRouter = require('./FoodDiaryRouter')

Router.use('/auth', AuthRouter)
Router.use('/food-diary', FoodDiaryRouter)

module.exports = Router