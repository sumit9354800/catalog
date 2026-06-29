const express = require('express');
const authRouter = express.Router()
const { registerUser } = require('../controllers/auth.controller');

authRouter.post('/register', registerUser)

module.exports = authRouter