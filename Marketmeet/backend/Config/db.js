const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/FULLSTACK")
.then(()=>{
    console.log("DATABASE CONNECTED SUCCESSFULLY")
})
.catch((err)=>{
    console.log("DTABASE NOT CONNECTED")
    console.log(err)
})