const Router = require('express').Router()
const controller = require('../controllers/ExerciseDiaryController')
const middleware = require('../middleware')

Router.get(
    '/',
    // middleware.stripToken,
    // middleware.verifyToken,
    controller.GetExericseDiary,
)
Router.get(
    '/edit/:exercise_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetExerciseByIdNew,
)
Router.post(
    '/:user_id',
    // middleware.stripToken,
    // middleware.verifyToken,
    controller.CreateExerciseDiary
)
Router.put(
    '/edit/:exercise_id',
    // middleware.stripToken,
    // middleware.verifyToken,
    controller.UpdateExericseDiary
)
Router.delete(
    '/edit/:exercise_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteExericse
)

module.exports = Router