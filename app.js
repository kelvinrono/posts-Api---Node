const express= require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv/config')
const bodyParser = require('body-parser');


app.use(bodyParser.json())

// mongodb+srv:cheruiyotk:cheruiyotk@cluster0.bbn5gly.mongodb.net/?retryWrites=true&w=majority
//Routes

//Import routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

    
mongoose.connect(process.env.DB_CONNECTION, () =>{
    console.log('Database Connected')
    })
    

app.listen(3000)