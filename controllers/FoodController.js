const {Food} = require('../models')

const GetFoods = async (req, res) => {
    try{

        const exercises = await Food.findAll()
        res.send(exercises)

    } catch (error) {
        throw error
    }
}