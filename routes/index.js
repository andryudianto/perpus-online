const router = require('express').Router()
const routerAdmin = require('./router-admin')
const routerBook = require('./router-book')
const routerRenter = require('./router-renter')

router.get('/', (req, res) =>{
    res.render('home')
})

router.use('/admins', routerAdmin)
router.use('/books', routerBook)
router.use('/renter', routerRenter)


module.exports = router