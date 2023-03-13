const express = require('express');
const app = express();
const timetableRoute = express.Router();

let Timetable = require("../model/Timetable");

//add book
timetableRoute.route('/').post((req, res, next) => {
    Timetable.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    });
});

//get all book 
timetableRoute.route('/').get((req, res) => {
    Timetable.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    });
});

module.exports = timetableRoute; 