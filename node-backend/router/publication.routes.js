const express = require('express');
const app = express();
const publicationRoute = express.Router();

let Publication = require("../model/Publication");

//add book
publicationRoute.route('/add-publication').post((req, res, next) => {
    Publication.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    });
});

//get all book 
publicationRoute.route('/').get((req, res) => {
    Publication.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    });
});

//get book by id
publicationRoute.route('/read-publication/:id').get((req, res) => {
    Publication.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    });
});

//update book
publicationRoute.route('/update-publication/:id').put((req, res, next) => {
    Publication.findByIdAndUpdate(req.params.id, {
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
publicationRoute.route('/delete-publication/:id').delete((req, res, next) => {
    Publication.findByIdAndRemove(req.params.id, (error, data) => {
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

module.exports = publicationRoute; 