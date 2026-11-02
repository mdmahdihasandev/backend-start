let mongoose = require('mongoose')
let {Schema} = mongoose

let todoSchema = new Schema({
    task: {
        type: String,
        require: true,
    },
    priority:{
        type: String,
        enum: ['none','low', 'higt', 'veri low'],
        default: 'none'
    },
   
},

 { versionKey: false}

)

module.exports = mongoose.model('Todo', todoSchema)