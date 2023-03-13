const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let Publication = new Schema({
    name:{
        type: String
    },
    year:{
        type: String
    },
    publ:{
        type: String
    }
},
{
    collection:'publications'
})

//export
module.exports = mongoose.model('Publication', Publication);