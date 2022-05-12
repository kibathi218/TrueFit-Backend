const {User} = require('../models')

const CreateUser = async (req, res) => {
    try {

        let userBody = {
            ...req.body
        }

        const newUser = await User.create(userBody)
        res.send(newUser)

    } catch (error) {
        throw error 
    }
}

module.exports = {
    CreateUser
}