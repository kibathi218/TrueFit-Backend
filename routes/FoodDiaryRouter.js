const Router = require('express').Router()
const controller = require('../controllers/FoodDiaryController')
// const middleware = require('../middleware')

Router.get(
    '/food-diary/:user_id',
    controller.GetFoodDiary
)
Router.post(
    '/:user_id',
    controller.CreateFoodDiary
)

module.exports = Router