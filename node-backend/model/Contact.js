const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let Contact = new Schema({
    name:{
        type: String
    },
    addr:{
        type: String
    }
},
{
    collection:'contacts'
})

//export
module.exports = mongoose.model('Contact', Contact)