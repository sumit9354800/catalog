const express = require('express');
const app = express();
const authRouter = require('./routes/auth.routes');
const cookiParser= require('cookie-parser')

// middleware
app.use(express.json())
app.use(cookiParser)

// route
app.use("/api/auth", authRouter)

module.exports = app