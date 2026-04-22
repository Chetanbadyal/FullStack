const router = require("express").Router()

const categoryController = require("../Server/Category/categoryController")
const userController = require("../Server/User/userController")
const enquiryController = require("../Server/Enquiry/enquiryController")

const multer = require("multer")
const storage = multer.memoryStorage()
const fileUpload = multer({storage})

//user routes
router.post("/admin/login",userController.login)

router.post("/category/add",fileUpload.single('categoryImage'),categoryController.add)
router.post("/category/getall",categoryController.getall)
router.post("/category/getsingle",categoryController.getsingleData)
router.post("/category/delete",categoryController.deleteData)
router.post("/category/update",fileUpload.single('categoryImage'),categoryController.updateData)

//enquiry routes
router.post("/enquiry/add",enquiryController.add)
router.post("/enquiry/getall",enquiryController.getall)

module.exports = router

