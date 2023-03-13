const express = require('express');
const app = express();
const contactRoute = express.Router();

let Contact = require("../model/Contact");

//add book
contactRoute.route('/add-contact').post((req, res, next) => {
    Contact.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    });
});

//get all book 
contactRoute.route('/').get((req, res) => {
    Contact.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    });
});

//get book by id
contactRoute.route('/read-contact/:id').get((req, res) => {
    Contact.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    });
});

//update book
contactRoute.route('/update-contact/:id').put((req, res, next) => {
    Contact.findByIdAndUpdate(req.params.id, {
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
contactRoute.route('/delete-contact/:id').delete((req, res, next) => {
    Contact.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
            console.log('deleted successfully');
        }
    });
});

module.exports = contactRoute; 