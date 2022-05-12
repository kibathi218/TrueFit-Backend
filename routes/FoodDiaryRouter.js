const Router = require('express').Router()
const controller = require('../controllers/FoodDiaryController')
// const middleware = require('../middleware')

Router.get(
    '/:user_id',
    controller.GetFoodDiary
)
Router.post(
    '/:user_id',
    controller.CreateFoodDiary
)
Router.put(
    '/:food_id',
    controller.UpdateFoodDiary
)
Router.delete(
    '/:food_id',
    controller.DeleteFood
)

module.exports = Router