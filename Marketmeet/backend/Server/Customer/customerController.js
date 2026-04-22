const customer = require("./customerModel")
const user = require("../User/userModel")
const bcrypt = require("bcrypt")
const roundValue = 10;

register=(req,res)=>{
    let validationErrors = [];

    if(!req.body.name){
        validationErrors.push("name is required")
    }
    if(!req.body.email){
        validationErrors.push("email is required")
    }
    if(!req.body.password){
        validationErrors.push("password is required")
    }
    if(!req.body.contact){
        validationErrors.push("contact is required")
    }
    if(!req.body.address){
        validationErrors.push("address is required")
    }

    if(validationErrors.length>0){
        res.json({
            status:422,
            success:false,
            message:"validation errors",
            errors:validationErrors
        })
    }
    else{
        user.findOne({email:req.body.email})
        .then((userData)=>{
            if(!userData){
                let userObj = new user()
                userObj.name = req.body.name
                userObj.email = req.body.email
                userObj.password = bcrypt.hashSync(req.body.password,roundValue)
                userObj.save()
                .then((userRes)=>{
                    let customObj = new customer()
                    customObj.name = req.body.name
                    customObj.email = req.body.email
                    customObj.password = req.body.password
                    customObj.contact = req.body.contact
                    customObj.address = req.body.address
                    customObj.userId = userRes._id
                    customObj.save()
                    .then((cusRes)=>{
                        userObj.customerId = cusRes._id
                        userObj.save()
                        .then(()=>{
                            res.json({
                                status:200,
                                success:true,
                                message:"Customer registered successfully",
                                data:cusRes
                            })
                        })
                        .catch((err)=>{
                            res.json({
                                status:500,
                                success:false,
                                message:"Internal server error",
                                errors:err.message
                            })
                        })
                    })
                    .catch((err)=>{
                        res.json({
                            status:500,
                            success:false,
                            message:"Internal server error",
                            errors:err.message
                        })
                    })
                })
            }
            else{
                res.json({
                    status:422,
                    success:false,
                    message:"User already exists",
                    data:userData
                })
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal server error",
                errors:err.message
            })
        })
    }
}

module.exports = {
    register
}