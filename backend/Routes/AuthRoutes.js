const express=require("express");
const router=express.Router();
const authController=require("../Controller/AuthController");
router.post("/signin",authController.postsignin);
router.post("/signup",authController.postsignup);
module.exports=router;