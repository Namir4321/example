const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken")
const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const FuelSchema=new Schema({
    fueltype:{
        type:String,
        required:true,
    },
    Quantity:{
        type:Number,
        required:true,
    }
}
)
module.exports=mongoose.model("Fuel",FuelSchema);
