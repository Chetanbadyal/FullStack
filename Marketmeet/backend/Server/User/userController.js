const user = require("./userModel")
const roundValue = 10;
const jwt = require('jsonwebtoken')
const privatekey = "MyProject123"
const bcrypt = require("bcrypt")
login = (req, res) => {
    validationerrors = []

    if (!req.body.email)
        validationerrors.push("Email is required")
    if (!req.body.password)
        validationerrors.push("Password is required")

    if (validationerrors.length > 0) {
        res.json({
            status: 422,
            success: false,
            message: "Validation Errors",
            errors: validationerrors
        })
    }
    else {
        //Email existance
        user.findOne({ email: req.body.email })
            .then(userData => {
                //data empty
                if (!userData) {
                    res.json({
                        status: 404,
                        success: false,
                        message: "Email doesn`t  exists"
                    })
                }
                else {
                    //password compare
                    bcrypt.compare(req.body.password, userData.password, function (err, result) {
                         console.log(err)
                        console.log(result)
                        if (result) {
                            var payload = {
                                name: userData.name,
                                email: userData.email,
                                userId: userData._id,
                                userType: userData.userType
                            }

                            var token = jwt.sign(payload, privatekey)

                            res.json({
                                status: 200,
                                success: true,
                                message: "login Successfull",
                                token: token,
                                data: userData
                            })
                        }
                        else {
                            res.json({
                                status: 422,
                                success: false,
                                message: "Invalid password"
                            })
                        }
                    })
                }
            })
            .catch(err => {
                res.json({
                    status: 500,
                    success: false,
                    message: "Internal Server Error",
                    errors: err.message
                })
            })
    }
}

changePassword = (req,res)=>{
    let validationerrors=[];

    if(!req.body._id){
        validationerrors.push("id is required")
    }
    if(!req.body.currentPassword){
        validationerrors.push("current password is required")
    }
    if(!req.body.newPassword){
        validationerrors.push("new password is required")
    }
    if(!req.body.confirmPassword){
        validationerrors.push("confirm password is required")
    }

    if(validationerrors.length>0){
        res.json({
            status:422,
            success:false,
            message:"Validtion errors occurs",
            errors:validationerrors
        })
    }
    else{
        user.findOne({_id:req.body._id})
        .then((userData)=>{
            if(!userData){
                res.json({
                    status:404,
                    success:false,
                    message:"User doesn't exists"
                })
            }
            else{
                if(bcrypt.compareSync(req.body.currentPassword,userData.password)){
                    if(req.body.newPassword===req.body.confirmPassword){
                        userData.password=bcrypt.hashSync(req.body.newPassword,10)
                        userData.save()
                        .then((newData)=>{
                            res.json({
                                status:200,
                                success:true,
                                message:"Password updated successfully",
                                data:newData
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
                    }
                    else{
                        res.json({
                            status:422,
                            success:false,
                            message:"new password and confirm password do not match"
                        }) 
                    }
                }
                else{
                    res.json({
                        status:422,
                        success:false,
                        message:"Current password doesn't matched"
                    })
                }
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



module.exports={
    login,
    changePassword
}