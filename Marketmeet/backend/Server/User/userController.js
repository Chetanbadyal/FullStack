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





module.exports={
    login
    
}