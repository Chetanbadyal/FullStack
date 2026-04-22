const express = require("express")
const app = express()
const port = 3005

const cors = require("cors")
app.use(cors());

const config = require("./Config/db")

const seeder = require("./Config/seeder")
seeder.adminseeder()

app.use(express.urlencoded({extended:false}))
app.use(express.json({limit:'50mb'}))
const routes = require("./Routes/apiRoutes")
app.use("/api",routes)

app.listen(port,()=>{
    console.log("MY PROJECT IS RUNNING ON PORT"+" "+port)
})