require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const attractionRoutes = require('./routes/cincy')
const cors =require('cors')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
app.get('/', (req,res)=>{
  res.setHeader("Access-Control-Allow-Credentials","true");
})
// routes
app.use("/attractions", attractionRoutes)

// connect to DB
mongoose.connect(process.env.MONGO_URI)
 .then(() => {
   // listen for requests
   app.listen(process.env.PORT, () => {
     console.log('listening on port', process.env.PORT)
   })
 })
 .catch((error) =>{
  console.log(error);
 })