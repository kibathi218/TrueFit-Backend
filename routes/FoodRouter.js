const Router = require('express').Router()
const controller = require('../controllers/FoodController')

Router.get(
    '/list',
    controller.GetFoods
)

module.exports = Router