let mongoose = require('mongoose')
let { Schema } = mongoose

let userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    gmail: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('username', userSchema)