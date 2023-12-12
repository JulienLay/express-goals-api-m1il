const mongoose = require('mongoose')

const commentSchema = mongoose.Schema(
    {
        content: {
            type: String,
            required: [true, 'Please add a content value'],
        },
        users_id: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: [true, 'Please add a user ID'],
            }
        ],
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

module.exports = mongoose.model('Comment', commentSchema)