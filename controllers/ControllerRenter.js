const {Renter} = require('../models')

class ControllerRenter{

    static getHomeHandler(req, res){
        res.send('home renter')
    }

    static getLoginHandler(req, res){
        let pesan = req.query.pesan
        res.render('login-renter', {pesan})
    }

    static postLoginHandler(req, res){
        let email = req.body.email
        let password = req.body.password

        Renter.findOne({
            where: {
                email: email,
                password: password
            }
        })
        .then(data => {
            res.render('profile', {data, title:data.firstName})
        })
        .catch(err => {
            let pesan = 'password / email salah!'
            res.redirect(`/renter/login?pesan=${pesan}`)
        })
    }

    static getAddHandler(req,res){
        res.render('register')
    }

    static postAddHandler(req, res){
        let newRenter = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthDate: req.body.birthDate,
            password: req.body.password,
            email: req.body.email,
            address: req.body.address 
        }

        Renter.create(newRenter)
        .then(data => {
            res.redirect('/renter/login')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static getEditHandler(req,res){
        let id = req.params.id
        Renter.findOne({
            where: {
                id: id
            }
        })
        .then(data => {
            console.log(data.birthDate)
            res.render('edit-profile', {data})
        })
    }

    static postEditHandler(req, res){

    }

    static getDeleteHandler(req, res){

    }

    static logoutHandler(req,res){
        
    }
}

module.exports = ControllerRenter