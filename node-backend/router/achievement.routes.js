const express = require('express');
const app = express();
const achievementRoute = express.Router();

let Achievement = require("../model/Achievement");

//add book
achievementRoute.route('/add-achievement').post((req, res, next) => {
    Achievement.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    });
});

//get all book 
achievementRoute.route('/').get((req, res) => {
    Achievement.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    });
});

//get book by id
achievementRoute.route('/read-achievement/:id').get((req, res) => {
    Achievement.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    });
});

//update book
achievementRoute.route('/update-achievement/:id').put((req, res, next) => {
    Achievement.findByIdAndUpdate(req.params.id, {
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
achievementRoute.route('/delete-achievement/:id').delete((req, res, next) => {
    Achievement.findByIdAndRemove(req.params.id, (error, data) => {
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

module.exports = achievementRoute; 