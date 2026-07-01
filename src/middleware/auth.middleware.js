const jwt = require('jsonwebtoken');
const User = require('../models/user.model')

const protect = async (req, res, next) => {
    const token = req.cookies.token;
    const decode = jwt.verify(token, process.env.JWT_SECRET)

    const user = await User.findById(decode.id)

    req.user = user

    next()
}

module.exports = protect