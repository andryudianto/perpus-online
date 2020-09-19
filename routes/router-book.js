const router = require('express').Router()
const ControllerBook = require('../controllers/ControllerBooks')

router.get('/', ControllerBook.getAllHandler)
router.get('/add', ControllerBook.getAddHandler)
router.post('/add', ControllerBook.postAddHandler)
router.get('/edit/:id', ControllerBook.getEditHandler)
router.post('/edit/:id', ControllerBook.postEditHandler)
router.get('/delete/:id', ControllerBook.getDeleteHandler)

module.exports = router