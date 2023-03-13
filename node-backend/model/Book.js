//schema

const mongoose = require('mongoose')
const Schema = mongoose.Schema;
let Book = new Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    dept:{
        type: String
    },
    mobile:{
        type: String
    },
},
{
    collection:'books'
})

//export
module.exports = mongoose.model('Book', Book)