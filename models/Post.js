const mongoose = require('mongoose');

// creating a schema 
const PostSchema = mongoose.Schema( { 
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

//mongoose.Schema({
 //   username: String,
 //   password: String
// })

module.exports = mongoose.model('Posts', PostSchema);