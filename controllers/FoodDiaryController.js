const {FoodDiary} = require('../models')

const CreateFoodDiary = async (req, res) => {
    try {
        let userId = parseInt(req.params.user_Id)

        let foodDiaryBody = {
            userId,
            ...req.body
        }

        const newFoodDiary = await FoodDiary.create(foodDiaryBody)
        console.log(userId)
        res.send(newFoodDiary) 

    } catch (error) {
        throw error
    }
} 

const GetFoodDiary = async (req, res) => {
    try{
        // let userId = parseInt(req.params.user_Id)

        const foodDiary = await FoodDiary.findAll()
        res.send(foodDiary)

    } catch (error) {
        throw error 
    }
}

const UpdateFoodDiary = async (req, res) => {
    try{
        let foodId = parseInt(req.params.food_id)
        const updatedFoodDiary= await FoodDiary.update(req.body,
            { where: { id: foodId } })
            res.send(updatedFoodDiary)

    } catch (error) {
        throw error
    }
}

const DeleteFood = async (req, res) => {
    try{
        let foodId = parseInt(req.params.food_id)
        await FoodDiary.destroy({ where: { id: foodId } })
        res.send({ message: `You have deleted a review with an id of ${foodId}` })


    } catch (error) {
        throw error
    }
}


const GetFoodByIdNew = async (req, res) => {
    try{
        let foodId = parseInt(req.params.food_id)
        const foodById= await FoodDiary.findOne(
            { where: { id: foodId } })
            res.send(foodById)

    } catch (error) {
        throw error
    }
}


module.exports = {
    CreateFoodDiary,
    GetFoodDiary,
    UpdateFoodDiary,
    DeleteFood,
    GetFoodByIdNew
}