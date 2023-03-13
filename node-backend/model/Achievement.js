const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let Achievement = new Schema({
    desp:{
        type: String
    },
    year:{
        type: String
    },
    event:{
        type: String
    }
},
{
    collection:'achievements'
})

//export
module.exports = mongoose.model('Achievement', Achievement)