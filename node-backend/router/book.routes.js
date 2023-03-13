const express = require('express');
const app = express();
const bookRoute = express.Router();

let Book = require("../model/Book");

//add book
bookRoute.route('/add-book').post((req, res, next) => {
    Book.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    });
});

// search-bar functionality
bookRoute.route('/search',async(req,res) => {
    try{

        const search = req.query.search || "";
        const books = await Book.find({name:{$regex:search,$options:"i"}})

        const response = {
            error:false,
            books
        };

        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({error:true,message:"Internal Server Error"});
    }
});

//get all book 
bookRoute.route('/').get((req, res) => {
    Book.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    });
});

//get book by id
bookRoute.route('/read-book/:id').get((req, res) => {
    Book.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    });
});

//update book
bookRoute.route('/update-book/:id').put((req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            res.json(data);
            console.log('book updated successfully');
        }
    });
});

//delete book
bookRoute.route('/delete-book/:id').delete((req, res, next) => {
    Book.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
            console.log('book deleted successfully');
        }
    });
});

module.exports = bookRoute; 