const {FoodDiary} = require('../models')

const CreateFoodDiary = async (req, res) => {
    try {
        let userId = parseInt(req.params.user_Id)

        let foodDiaryBody = {
            userId,
            ...req.body
        }

        const newFoodDiary = await FoodDiary.create(foodDiaryBody)
        res.send(newFoodDiary) 

    } catch (error) {
        throw error
    }
} 

const GetFoodDiary = async (req, res) => {
    try{
        let userId = parseInt(req.params.user_Id)

        const foodDiary = await FoodDiary.findOne({where: {id: userId}})
        res.send(foodDiary)

    } catch (error) {
        throw error 
    }
}

module.exports = {
    CreateFoodDiary,
    GetFoodDiary
}