const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Please add a username value'],
        },
        avatar: {
            type: String,
            required: [true, 'Please add an avatar value'],
        },
        email: {
            type: String,
            required: [true, 'Please add an email value'],
        },
        password: {
            type: String,
            required: [true, 'Please add a password value'],
        },
        remember_token: {
            type: String,
            required: [true, 'Please add a remember_token value'],
        },
        articles_id: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Article',
                required: [true, 'Please add an article ID'],
            }
        ],
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('User', userSchema)