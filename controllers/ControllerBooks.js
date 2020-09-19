const {Book} = require('../models')

class ControllerBook{
    static getAllHandler(req, res){
        Book.findAll()
        .then(data => {
            res.render('books', {data, title: 'Books'})
        })
        .catch(err =>{
            res.send(err)
        })
    }

    static getAddHandler(req,res){
        res.render('add-book')
    }

    static postAddHandler(req, res){
        let newBook = {
            title: req.body.title,
            isbn: req.body.isbn,
            pageCount: req.body.pageCount,
            publishedDate: req.body.publishedDate,
            authors: (req.body.authors).split(","),
            category: req.body.category
        }

        Book.create(newBook)
        .then(data => {
            res.redirect('/books')
        })
        .catch(err =>{
            console.log(err)
            res.send(err)
        })
        
    }

    static getEditHandler(req,res){
        let id = req.params.id  
        Book.findOne({
            where:{
                id: id
            }
        })
        .then(data => {
            res.render('edit-book', {data})
        })
    }

    static postEditHandler(req, res){
        let id = req.params.id
        let updatedBook = {
            title: req.body.title,
            isbn: req.body.isbn,
            pageCount: req.body.pageCount,
            publishedDate: req.body.publishedDate,
            authors: (req.body.authors).split(","),
            category: req.body.category
        }

        Book.update(updatedBook,{
            where:{
                id: id
            }
        })
        .then(data => {
            res.redirect('/books')
        })
        .catch(err =>{
            console.log(err)
            res.send(err)
        })
    }

    static getDeleteHandler(req, res){
        let id = req.params.id
        Book.destroy({
            where:{
                id: id
            }
        })
        .then(data => {
            res.redirect('/books')
        })
        .catch(err =>{
            res.send(err)
        })
    }
}

module.exports = ControllerBook