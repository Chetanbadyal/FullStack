const router = require("express").Router()

const categoryController = require("../Server/Category/categoryController")
const userController = require("../Server/User/userController")
const enquiryController = require("../Server/Enquiry/enquiryController")
const servicesController=require("../Server/Service/serviceController")
const customerController=require("../Server/Customer/customerController")

const multer = require("multer")
const storage = multer.memoryStorage()
const fileUpload = multer({storage})



router.post("/category/add",fileUpload.single('categoryImage'),categoryController.add)
router.post("/category/getall",categoryController.getall)
router.post("/category/getsingle",categoryController.getsingleData)
router.post("/category/delete",categoryController.deleteData)
router.post("/category/update",fileUpload.single('categoryImage'),categoryController.updateData)
//Services
router.post("/services/add",fileUpload.single('ServiceImage'),servicesController.add)
router.post("/services/getall",servicesController.getall)
router.post("/services/getsingleData",servicesController.getsingleData)
router.post("/services/deleteData",servicesController.deleteData)
router.post("/services/updateData",servicesController.updateData)
//register
router.post("/customer/register",customerController.register)
//login
router.post("/user/login",userController.login)


//enquiry routes
router.post("/enquiry/add",enquiryController.add)
router.post("/enquiry/getall",enquiryController.getall)

module.exports = router

