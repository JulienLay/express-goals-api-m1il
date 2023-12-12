const mongoose = require('mongoose')

const tagSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a title value'],
        },
        articles_id: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Article',
                required: [true, 'Please add a tag ID'],
            }
        ],
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Tag', tagSchema)