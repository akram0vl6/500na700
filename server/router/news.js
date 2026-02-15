const express = require('express')
const router = express.Router()
const controller = require('../controllers/newController')

router.get('/', controller.getAll.bind(controller))
router.get('/:id', controller.getById.bind(controller))
router.post('/', controller.create.bind(controller))
router.put('/:id', controller.update.bind(controller))
router.delete('/:id', controller.delete.bind(controller))

router.post('/seed', controller.seed.bind(controller))

module.exports = router