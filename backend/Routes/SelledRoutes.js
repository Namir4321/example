const express=require("express");
const router=express.Router();
const selledfuel=require("../Controller/SellController");
router.post("/selled",selledfuel.selled);
router.get("/selldetails/:id",selledfuel.sellDetail);


module.exports=router;