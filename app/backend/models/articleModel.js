const mongoose = require('mongoose')

const articleSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a title value'],
        },
        slug: {
            type: String,
            required: [true, 'Please add a slug value'],
        },
        content: {
            type: String,
            required: [true, 'Please add a content value'],
        },
        cover: {
            type: String,
            required: [true, 'Please add a cover value'],
        },
        users_id: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: [true, 'Please add a user ID'],
            }
        ],
        tags_id: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Tag',
                required: [true, 'Please add a tag ID'],
            }
        ],
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Article', articleSchema)