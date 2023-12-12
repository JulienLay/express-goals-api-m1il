const asyncHandler = require('express-async-handler')

const TagModel = require('../models/tagModel')

const getTags = asyncHandler(async (req, res) => {
    const tags = await TagModel.find()
    res.status(200).json(tags)
})

const getTag = asyncHandler(async (req, res) => {
    const tag = await TagModel.findById(req.params.id)

    if (!tag) {
        res.status(404);
        throw new Error('Tag not found')
    }

    res.status(200).json(tag)
})

const addTag = asyncHandler(async (req, res) => {
    if (!req.body.title) {
        res.status(400)
        throw new Error('Please write a title')
    }

    if (!req.body.articles_id) {
        res.status(400)
        throw new Error('Please add a tag ID')
    }
    const tag = await TagModel.create({
        title: req.body.title,
        articles_id: req.body.articles_id
    })
    res.json({
        message: `Tag ${req.body.title} added`
    })
})

const updateTag = asyncHandler(async (req, res) => {
    const tag = await TagModel.findById(req.params.id)
    if (!tag) {
        res.status(400)
        throw new Error('Tag not found')
    }
    const updatedTag = await TagModel.findByIdAndUpdate(tag, req.body)
    res.json({
        tag: `${req.body.title} updated`
    })
})

const deleteTag = asyncHandler(async (req, res) => {
    const tag = await TagModel.findById(req.params.id)
    if (!tag) {
        res.status(400)
        throw new Error('Tag not found')
    }
    const deletedTag = await TagModel.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedTag)
})

module.exports = {
    getTags,
    getTag,
    addTag,
    updateTag,
    deleteTag
}