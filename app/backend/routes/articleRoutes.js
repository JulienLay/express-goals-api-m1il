const express = require('express')
const router = express.Router()

const {
    getArticles,
    getArticle,
    addArticle,
    updateArticle,
    deleteArticle
} = require('../controllers/articleController')

router.get('/', getArticles)
router.get('/:id', getArticle);
router.post('/', addArticle)
router.put('/:id', updateArticle)
router.delete('/:id', deleteArticle)

module.exports = router