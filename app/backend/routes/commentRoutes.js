const express = require('express')
const router = express.Router()

const {
    getComments,
    getComment,
    addComment,
    updateComment,
    deleteComment
} = require('../controllers/commentController')

router.get('/', getComments)
router.get('/:id', getComment);
router.post('/', addComment)
router.put('/:id', updateComment)
router.delete('/:id', deleteComment)

module.exports = router