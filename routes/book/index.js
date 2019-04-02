const express = require('express')
const router = express.Router()

//Controllers
const bookController = require('../../controllers/bookController')

//Routes
router.post('/', bookController.create)
router.get('/', bookController.findAll)
router.get('/:isbn', bookController.findOne)
router.put('/:isbn', bookController.update)
router.delete('/:isbn', bookController.delete)
router.patch('/:isbn', bookController.patch)
module.exports = router