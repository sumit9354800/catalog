const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/,
            "Please enter a valid email",]
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false

    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: 'user'
    }
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)