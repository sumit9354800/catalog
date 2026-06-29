const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {

    const { name, email, password } = req.body;

    // valitate
    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: 'All feild are required'
        })
    }

    // checking user
    const existingUser = await User.findOne({ email })

    if (existingUser) {
        return res.status(409).json({
            success: false,
            message: 'User already exists'
        })
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const user = await User.create({ name, email, password: hashPassword })


    // create JWT
    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );

    // httpOnly cookie
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 100,
    })

    const userResponse = {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
    }

    // create user
    res.status(201).json({
        success: true,
        message: 'User registered successfuly',
        user: userResponse,
    })


}

module.exports = { registerUser }