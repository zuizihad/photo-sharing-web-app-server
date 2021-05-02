const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const userController = {
    register: async (req, res) => {

        try {
            const { name, email, password } = req.body;
            const user = await Users.findOne({ email })
            if (user) return res.status(400).json({ msg: 'The email already exists.' })

            if (password.length < 6) return res.status(400).json({ msg: 'Password is atleast 6 characters long' })

            //password encryption
            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = new Users({
                name, email, password: passwordHash
            })
            //save to mongo database
            await newUser.save()
            return res.status(200).json({ msg: 'Registration success' })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await Users.findOne({ email })
            if (!user) {
                return res.status(400).json({ msg: 'User does not exists' })
            } else {
                const isUserFound = await bcrypt.compare(password, user.password)
                if (!isUserFound) {
                    return res.status(400).json({ msg: 'Incorrect password' })
                } else {
                    return res.json({ user, msg: "login success" })
                }

            }
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }

}


module.exports = userController;