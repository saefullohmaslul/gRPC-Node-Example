const { Router } = require('express')
const notesController = require('../controllers/notes.controller')

const router = Router()

router.get('/notes', notesController.get)

module.exports = router