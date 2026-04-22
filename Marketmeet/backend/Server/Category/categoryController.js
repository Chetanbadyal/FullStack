const category = require("./categoryModel")
const {uploadImg} = require("../../cloudinaryConfig")


add = (req,res)=>{
    let validationErrors = [];

    if(!req.body.categoryName){
        validationErrors.push("Category name is required")
    }

    if(!req.body.description){
        validationErrors.push("Description is required")
    }

    if(validationErrors.length>0){
        res.json({
            status:422,
            success:false,
            message:"VALIDATION ERROR OCCURS",
            error:validationErrors
        })
    }

    else{
        category.findOne({categoryName:req.body.categoryName})
        .then((categoryData)=>{
            if(!categoryData){
                (async ()=>{
                    let image = "Attachment not available";
                        if (req.file) {
                            try {
                                const imageUrl = await uploadImg(req.file.buffer, `node2026/${Date.now()}`);
                                image = imageUrl;
                            } catch (err) {
                                console.error("Cloudinary upload error:", err);
                                return res.status(500).json({
                                    success: false,
                                    status: 500,
                                    message: "Image upload failed",
                                    error: err.message || err
                                });
                            }
                        }
                let categoryObj = new category()
                categoryObj.categoryName = req.body.categoryName
                categoryObj.categoryImage = image
                categoryObj.description = req.body.description
                categoryObj.save()
                .then((savedData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"DATA ADDED SUCCESSFULLY",
                        data:savedData
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"INTERNAL SERVER ERROR",
                        error:err.message
                    })
                })
                })()
            }
            else{
                res.json({
                    status:422,
                    success:false,
                    message:"DATA ALREADY EXISTS",
                    data:categoryData
                })
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"INTERNAL SERVER ERROR",
                error:err.message
            })
        })
    }


}

getall = async(req,res)=>{
    let totalCount = await category.countDocuments().exec()

    category.find()
    .then((categoryData)=>{
        res.json({
            status:200,
            success:true,
            messsage:"DATA LOADED SUCCESSFULLY",
            data:categoryData,
            total:totalCount
        })
    })
    .catch((err)=>{
        res.json({
            status:500,
            success:false,
            message:"INTERNAL SERVER ERROR",
            error:err.message
        })
    })
}


getsingleData = (req,res)=>{
    let validationErrors = []

    if(!req.body._id){
        validationErrors.push("id is required")
    }

    if(validationErrors.length>0){
        res.json({
            status:422,
            success:false,
            message:"Validation errors occurs",
            error:validationErrors
        })
    }

    else{
        category.findOne({_id:req.body._id})
        .then((categoryData)=>{
            if(!categoryData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found"
                })
            }
            else{
               res.json({
                status:200,
                success:true,
                message:"DATA LOADED SUCCESSFULLY",
                data:categoryData
               }) 
            }
        })
        .catch((err)=>{
        res.json({
            status:500,
            success:false,
            message:"INTERNAL SERVER ERROR",
            error:err.message
        })
    })
    }
}

deleteData = (req,res)=>{
    let validationErrors = []

    if(!req.body._id){
        validationErrors.push("id is required")
    }

    if(validationErrors.length>0){
        res.json({
            status:422,
            success:false,
            message:"Validation errors occurs",
            error:validationErrors
        })
    }

    else{
        category.findOne({_id:req.body._id})
        .then((categoryData)=>{
            if(!categoryData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found"
                })
            }
            else{
               category.deleteOne({_id:req.body._id})
               .then(()=>{
                res.json({
                    status:200,
                    success:true,
                    message:"DATA DELETED SUCCESSFULLY",
                    data:categoryData
                })
               })
               .catch((err)=>{
                 res.json({
                    status:500,
                    success:false,
                    message:"INTERNAL SERVER ERROR",
                    error:err.message
                })
               })
            }
        })
        .catch((err)=>{
        res.json({
            status:500,
            success:false,
            message:"INTERNAL SERVER ERROR",
            error:err.message
        })
    })
    }
}

updateData = (req,res)=>{
    let validationErrors = [];

    if(!req.body._id){
        validationErrors.push("Id is required")
    }

   

    if(validationErrors.length>0){
        res.json({
            status:422,
            success:false,
            message:"VALIDATION ERROR OCCURS",
            error:validationErrors
        })
    }

    else{
        category.findOne({_id:req.body._id})
        .then((categoryData)=>{
            if(!categoryData){
               res.json({
                    status:404,
                    success:false,
                    message:"DATA NOT FOUND",
                    
                })
            }
            else{
                

                 (async ()=>{
                    let image = "Attachment not available";
                        if (req.file) {
                            try {
                                const imageUrl = await uploadImg(req.file.buffer, `node2026/${Date.now()}`);
                                image = imageUrl;
                            } catch (err) {
                                console.error("Cloudinary upload error:", err);
                                return res.status(500).json({
                                    success: false,
                                    status: 500,
                                    message: "Image upload failed",
                                    error: err.message || err
                                });
                            }
                        }
                if(req.body.categoryName){
                    categoryData.categoryName = req.body.categoryName
                }
                if(req.body.description){
                    categoryData.description = req.body.description
                }
                if(req.file){
                    categoryData.categoryImage = image
                }
                categoryData.save()
                .then((savedData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"DATA UPDATED SUCCESSFULLY",
                        data:savedData
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"INTERNAL SERVER ERROR",
                        error:err.message
                    })
                })
                })()
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"INTERNAL SERVER ERROR",
                error:err.message
            })
        })
    }


}

module.exports = {
    add,
    getall,
    getsingleData,
    deleteData,
    updateData
}

