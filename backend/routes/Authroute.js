const express=require("express");
const router=express.Router();
const isAuthController=require("../controller/AuthController");
router.post("/signup",isAuthController.postsignup)
router.post("/signin",isAuthController.postsignin)

module.exports=router