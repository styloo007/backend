const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let Research = new Schema({
    name:{
        type: String
    },
    field:{
        type: String
    },
    funds:{
        type: String
    }
},
{
    collection:'researchs'
})

//export
module.exports = mongoose.model('Research', Research);