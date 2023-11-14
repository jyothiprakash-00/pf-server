// Loads .env file contents into process.env by default.
require('dotenv').config()
const express = require('express')
const cors = require('cors')
// create a express application
const pfServer = express()
// import router
const router = require('./Routes/router')
require('./DB/Connection')

pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
const PORT =4000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`project fair server started at port ${PORT} and waiting for the request!!!!`);
})

// http get request resolving to  http://localhost:4000/

pfServer.get('/',(req,res)=>{
    res.send(`<h1>project fair server started and waiting for the request</h1>`)

})
