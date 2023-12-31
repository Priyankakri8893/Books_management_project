const { default: mongoose } = require("mongoose");

const userSchema= new mongoose.Schema({
    title: {
        type: String,
        required: true,
        enum: ["Mr", "Mrs", "Miss"],
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        minlength: 8,
        maxlength:15,
        required: true,
        trim: true
    },
    address: {
        street: String,
        city: String,
        pincode: String
    } 
}, {timestamps: true})


module.exports= mongoose.model('User', userSchema)
