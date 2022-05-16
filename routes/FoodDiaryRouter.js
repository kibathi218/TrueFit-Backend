const Router = require('express').Router()
const controller = require('../controllers/FoodDiaryController')
const middleware = require('../middleware')

Router.get(
    '/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetFoodDiary,
)
Router.get(
    '/edit/:food_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetFoodByIdNew,
)
Router.post(
    '/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreateFoodDiary
)
Router.put(
    '/edit/:food_id',
    // middleware.stripToken,
    // middleware.verifyToken,
    controller.UpdateFoodDiary
)
Router.delete(
    '/edit/:food_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteFood
)

module.exports = Router