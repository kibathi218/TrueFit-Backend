const {Food} = require('../models')

const GetFoods = async (req, res) => {
    try{

        const exercises = await Food.findAll()
        res.send(exercises)
        console.log("works")

    } catch (error) {
        throw error
    }
}

// const GetFoodById = async (req, res) => {
//     try{

//         const exercises = await Food.findAll()
//         res.send(exercises)
//         console.log("works")

//     } catch (error) {
//         throw error
//     }
// }

module.exports = {
    GetFoods,

}