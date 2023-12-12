const asyncHandler = require('express-async-handler')

const ArticleModel = require('../models/articleModel')

const getArticles = asyncHandler(async (req, res) => {
    const articles = await ArticleModel.find()
    res.status(200).json(articles)
})

const getArticle = asyncHandler(async (req, res) => {
    const article = await ArticleModel.findById(req.params.id)

    if (!article) {
        res.status(404);
        throw new Error('Article not found')
    }

    res.status(200).json(article)
})

const addArticle = asyncHandler(async (req, res) => {
    if (!req.body.title) {
        res.status(400)
        throw new Error('Please write a title')
    }
    if (!req.body.slug) {
        res.status(400)
        throw new Error('Please write a slug')
    }
    if (!req.body.content) {
        res.status(400)
        throw new Error('Please write a content')
    }
    if (!req.body.cover) {
        res.status(400)
        throw new Error('Please write a cover')
    }

    if (!req.body.users_id) {
        res.status(400)
        throw new Error('Please add a user ID')
    }

    if (!req.body.tags_id) {
        res.status(400)
        throw new Error('Please add a tag ID')
    }
    const article = await ArticleModel.create({
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        cover: req.body.cover,
        users_id: req.body.users_id,
        tags_id: req.body.tags_id
    })
    res.json({
        message: `Article ${req.body.title} added`
    })
})

const updateArticle = asyncHandler(async (req, res) => {
    const article = await ArticleModel.findById(req.params.id)
    if (!article) {
        res.status(400)
        throw new Error('Article not found')
    }
    const updatedArticle = await ArticleModel.findByIdAndUpdate(article, req.body)
    res.json({
        article: `${req.body.title} updated`
    })
})

const deleteArticle = asyncHandler(async (req, res) => {
    const article = await ArticleModel.findById(req.params.id)
    if (!article) {
        res.status(400)
        throw new Error('Article not found')
    }
    const deletedArticle = await ArticleModel.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedArticle)
})

module.exports = {
    getArticles,
    getArticle,
    addArticle,
    updateArticle,
    deleteArticle
}