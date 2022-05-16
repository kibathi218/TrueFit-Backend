const {ExerciseDiary} = require('../models')

const CreateExerciseDiary = async (req, res) => {
    try {
        let userId = parseInt(req.params.user_Id)

        let exerciseDiaryBody = {
            userId,
            ...req.body
        }

        const newExericseDiary = await ExerciseDiary.create(exerciseDiaryBody)
        console.log(userId)
        res.send(newExericseDiary) 

    } catch (error) {
        throw error
    }
} 

const GetExericseDiary = async (req, res) => {
    try{
        // let userId = parseInt(req.params.user_Id)

        const exerciseDiary = await ExericseDiary.findAll()
        res.send(exerciseDiary)

    } catch (error) {
        throw error 
    }
}

const UpdateExericseDiary = async (req, res) => {
    try{
        let exerciseId = parseInt(req.params.exercise_id)
        const updatedExericseDiary= await ExericseDiary.update(req.body,
            { where: { id: exerciseId } })
            res.send(updatedExericseDiary)

    } catch (error) {
        throw error
    }
}

const DeleteExericse = async (req, res) => {
    try{
        let exerciseId = parseInt(req.params.exercise_id)
        await ExericseDiary.destroy({ where: { id: exerciseId } })
        res.send({ message: `You have deleted a review with an id of ${exerciseId}` })


    } catch (error) {
        throw error
    }
}


const GetExerciseByIdNew = async (req, res) => {
    try{
        let exerciseId = parseInt(req.params.exercise_id)
        const exerciseById= await ExerciseDiary.findOne(
            { where: { id: exerciseId } })
            res.send(exerciseById)

    } catch (error) {
        throw error
    }
}


module.exports = {
    CreateExerciseDiary,
    GetExerciseByIdNew,
    DeleteExericse,
    GetExericseDiary,
    UpdateExericseDiary
}