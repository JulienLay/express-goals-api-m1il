const express = require('express')
const router = express.Router()

const {
    getTags,
    getTag,
    addTag,
    updateTag,
    deleteTag
} = require('../controllers/tagController')

router.get('/', getTags)
router.get('/:id', getTag);
router.post('/', addTag)
router.put('/:id', updateTag)
router.delete('/:id', deleteTag)

module.exports = router