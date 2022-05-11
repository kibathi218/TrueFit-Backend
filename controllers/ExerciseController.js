const { Exercise } = require('../models')

const GetExercises = async (req, res) => {
    try{
        const exercises = await Exercise.finAll()
        res.send(exercises)

    } catch (error) {
        throw error
    }
}


module.exports = {
    GetExercises
}