let express = require('express')
let app = express()
require('dotenv').config()

let security = require('./middleware/security')

let mongodbConnection = require('./config/mongodbConfig')
let  {controler} = require('./controleer/controlerForm')

app.use(express.json())

mongodbConnection()

  app.post('/username', security, controler)



app.listen(5000, ()=> {
    console.log('hello developer');
    
})