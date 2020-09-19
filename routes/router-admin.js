const router = require('express').Router()
const ControllerAdmin = require('../controllers/ControllerAdmin')

router.get('/', ControllerAdmin.getAllHandler)
router.get('/login', ControllerAdmin.getLoginHandler)
router.post('/login', ControllerAdmin.postLoginHandler)
router.get('/add', ControllerAdmin.getAddHandler)
router.post('/add', ControllerAdmin.postAddHandler)
router.get('/edit/:id', ControllerAdmin.getEditHandler)
router.post('/edit/:id', ControllerAdmin.postEditHandler)
router.get('/delete/:id', ControllerAdmin.getDeleteHandler)
router.get('/logout', ControllerAdmin.logoutHandler)

module.exports = router