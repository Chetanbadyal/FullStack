const product = require("./productModel")

add = (req,res)=>{
    let validationErrors = [];

    if(!req.body.productName){
        validationErrors.push("name is required")
    }

    if(!req.body.categoryId){
        validationErrors.push("id is required")
    }

    if(!req.body.description){
        validationErrors.push("description is required")
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
        let productObj = new product()
        productObj.productName = req.body.productName
        productObj.categoryId = req.body.categoryId
        productObj.description = req.body.description

        productObj.save()
        .then((productData)=>{
            res.json({
                status:200,
                success:true,
                message:"data added successfully",
                data:productData
            })
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"internal server error",
                errors:err.message
            })
        })
    }
    
}

getall= async(req,res)=>{
    let totalCount = await product.countDocuments(req.body).exec()

    product.find(req.body).populate("categoryId")
    .then((productData)=>{
        res.json({
            status:200,
            success:true,
            message:"Data loaded successfully",
            data:productData,
            total:totalCount
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

module.exports={
    add,
    getall
}