
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const errorHandler = require('./middleware/errorHandler')
const  routes  = require('./routes')
const cookie = require('cookie-parser')
const app = express()
const cors = require('cors')

const connectDB=async() =>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("DB running");
        
    } catch (error) {
        console.log(error)
    }
}

connectDB()

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials:true
  }

  app.get('/', (req, res) => {
    res.send('Welcome to the backend!');
  });


app.use(cors(corsOptions))
app.use(cookie())
app.use(express.json())

app.use(routes)


app.use(errorHandler)

app.listen(process.env.PORT,()=>{
    console.log("running successfully")
})

 