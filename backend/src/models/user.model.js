const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    cart: [
        {
            product: {
                id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'product',
                },
                image: String,
                name: String,
                category: String,
                price: Number,
                description: String,
            },
            quantity: {
                type: Number,
                required: true,
            }
        }
    ]
})

module.exports = mongoose.model('user', userSchema)