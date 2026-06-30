const express = require('express');
const authRouter = express.Router()
const { registerUser } = require('../controllers/auth.controller');
const asyncHandler = require('../utils/asyncHandler');

authRouter.post('/register', asyncHandler(registerUser))

module.exports = authRouter