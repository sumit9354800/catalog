const express = require('express');
const app = express();
const authRouter = require('./routes/auth.routes');
const cookiParser = require('cookie-parser')
const errorHandler = require('./middleware/error.middleware')

// middleware
app.use(express.json())
app.use(cookiParser())

// route
app.use("/api/auth", authRouter)

// it place last
app.use(errorHandler)


module.exports = app