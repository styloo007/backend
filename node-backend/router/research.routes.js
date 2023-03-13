const express = require('express');
const app = express();
const researchRoute = express.Router();

let Research = require("../model/research");

//add book
researchRoute.route('/add-research').post((req, res, next) => {
    Research.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    });
});

//get all book 
researchRoute.route('/').get((req, res) => {
    Research.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    });
});

//get book by id
researchRoute.route('/read-research/:id').get((req, res) => {
    Research.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    });
});

//update book
researchRoute.route('/update-research/:id').put((req, res, next) => {
    Research.findByIdAndUpdate(req.params.id, {
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
researchRoute.route('/delete-research/:id').delete((req, res, next) => {
    Research.findByIdAndRemove(req.params.id, (error, data) => {
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

module.exports = researchRoute; 