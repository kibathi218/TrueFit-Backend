const Router = require('express').Router()
const controller = require('../controllers/EcerciseDiaryController')
const middleware = require('../middleware')

Router.get(
    '/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetEcerciseDiary,
)
Router.get(
    '/edit/:exercise_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetEcerciseByIdNew,
)
Router.post(
    '/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreateExerciseDiary
)
Router.put(
    '/edit/:exercise_id',
    // middleware.stripToken,
    // middleware.verifyToken,
    controller.UpdateEcerciseDiary
)
Router.delete(
    '/edit/:exercise_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteEcercise
)

module.exports = Router