const mongoose = require('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("Mongodb Atlas Succesffully connected with pf server");

}).catch((err)=>{
    console.log(`Mongodb Connection failed!!! error: ${err}`);

})
