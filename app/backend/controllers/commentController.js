const asyncHandler = require('express-async-handler')

const CommentModel = require('../models/commentModel')

const getComments = asyncHandler(async (req, res) => {
    const comments = await CommentModel.find()
    res.status(200).json(comments)
})

const getComment = asyncHandler(async (req, res) => {
    const comment = await CommentModel.findById(req.params.id)

    if (!comment) {
        res.status(404);
        throw new Error('Comment not found')
    }

    res.status(200).json(comment)
})

const addComment = asyncHandler(async (req, res) => {
    if (!req.body.content) {
        res.status(400)
        throw new Error('Please write a content')
    }
    if (!req.body.users_id) {
        res.status(400)
        throw new Error('Please add a user id')
    }
    if (!req.body.articles_id) {
        res.status(400)
        throw new Error('Please add an article id')
    }
    const user = await CommentModel.create({
        content: req.body.content,
        users_id: req.body.users_id,
        articles_id: req.body.articles_id
    })
    res.json({
        message: `Comment ${req.body.content} added`
    })
})

const updateComment = asyncHandler(async (req, res) => {
    const comment = await CommentModel.findById(req.params.id)
    if (!comment) {
        res.status(400)
        throw new Error('Comment not found')
    }
    const updatedComment = await CommentModel.findByIdAndUpdate(comment, req.body)
    res.json({
        comment: `${req.body.contentn} updated`
    })
})

const deleteComment = asyncHandler(async (req, res) => {
    const comment = await CommentModel.findById(req.params.id)
    if (!comment) {
        res.status(400)
        throw new Error('Comment not found')
    }
    const deletedComment = await CommentModel.findByIdAndDelete(req.params.id)
    res.status(200).json(deleteComment)
})

module.exports = {
    getComments,
    getComment,
    addComment,
    updateComment,
    deleteComment
}