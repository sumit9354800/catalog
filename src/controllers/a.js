const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function registerUser(req, res) {

    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400).json(
            {
                success: false,
                message: 'all feild are required'
            }
        )
    }

    const existingUser = await User.findOne({ email })

    if (existingUser) {
        res.status(401).json(
            {
                success: false,
                message: 'Email already exists'
            }
        )
    }

    const hashPassword = bcrypt.hash(password, 10)

    const user = await User.create({ name, email, password: hashPassword })

    const token = jwt.sign(
        { id: user._id },
       process.env.JWT_SECRET,
       {expiresIn:'7d'}
    )

    res.cookie({
        
    })



}    