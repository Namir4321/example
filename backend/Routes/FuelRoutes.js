const express=require("express");
const router=express.Router();
const fuelController=require("../Controller/Fuel");
router.post("/add",fuelController.AddFuel);

module.exports=router;