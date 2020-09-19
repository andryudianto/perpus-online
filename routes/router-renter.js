const router = require('express').Router()
const ControllerRenter = require('../controllers/ControllerRenter')

router.get('/', ControllerRenter.getHomeHandler)
router.get('/login', ControllerRenter.getLoginHandler)
router.post('/login', ControllerRenter.postLoginHandler)
router.get('/register', ControllerRenter.getAddHandler)
router.post('/register', ControllerRenter.postAddHandler)
router.get('/profile/:id', ControllerRenter.getEditHandler)
router.post('/profile/:id', ControllerRenter.postEditHandler)
router.get('/delete/:id', ControllerRenter.getDeleteHandler)
router.get('/logout', ControllerRenter.logoutHandler)

module.exports = router