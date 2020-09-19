const {Admin} = require('../models')

class ControllerAdmin{

    static getAllHandler(req, res){
        Admin.findAll()
        .then(data =>{
            res.render('admin', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }
    
    static getLoginHandler(req, res){

    }

    static postLoginHandler(req, res){

    }

    static getAddHandler(req,res){

    }

    static postAddHandler(req, res){

    }

    static getEditHandler(req,res){

    }

    static postEditHandler(req, res){

    }

    static getDeleteHandler(req, res){

    }

    static logoutHandler(req,res){
        
    }
}

module.exports = ControllerAdmin