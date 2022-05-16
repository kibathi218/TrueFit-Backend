const Router = require('express').Router()
const controller = require('../controllers/FoodDiaryController')
const middleware = require('../middleware')

Router.get(
    '/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetFoodDiary,
)
Router.post(
    '/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreateFoodDiary
)
Router.put(
    '/:food_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdateFoodDiary
)
Router.delete(
    '/:food_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteFood
)

module.exports = Router