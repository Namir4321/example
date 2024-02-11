const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken")
const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const SellSchema=new Schema({
   customername:{
    type:String,
    required:true
   },
   fueltype:{
    type:String,
    required:true,
   },
   Quantity:{
    type:Number,
    required:true
   },
   Amount:{
    type:Number,
    required:true
   },
},{timestamps:true})



module.exports=mongoose.model("Sell",SellSchema);