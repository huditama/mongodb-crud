const express = require('express')
const router = express.Router()
const book = require('./book')

router.use('/books', book)

module.exports = router