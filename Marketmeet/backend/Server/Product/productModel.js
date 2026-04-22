const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName:{type:String,default:null},
    categoryId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"categories"},
    description:{type:String,default:null},
    status:{type:String,default:"Active"},
    createdAt:{type:Date,default:Date.now()}
})


module.exports=new mongoose.model("products",productSchema)