const mongoose = require("mongoose");

async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MONGO connected ${conn.connection.host}`)

    } catch (error) {
         console.log(`Database connection Error: ${error.message}`)
         process.exit(1)
    }
}

module.exports = connectDB