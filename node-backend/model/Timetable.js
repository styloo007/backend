const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let Timeta = new Schema({
    name:{
        type: String
    }
},
{
    collection:'timeta'
})

//export
module.exports = mongoose.model('Timeta', Timeta);