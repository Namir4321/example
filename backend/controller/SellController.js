const Sell=require("../Model/Sell");
const Fuel=require("../Model/Fuel")
exports.selled=async(req,res,next)=>{

const {customername,fueltype,Quantity,priced}=req.body;
const newSell=new Sell({
    customername:customername,
    fueltype:fueltype,
    Quantity:Quantity,
    Amount:priced,
})
try{
  const savedSales=await Sell.find();
    const savedSell=await newSell.save();
    console.log(savedSell)

    const existingFuel = await Fuel.findOne({ fueltype });
console.log(existingFuel)
if(existingFuel){
      existingFuel.Quantity -= (1*Quantity);
    const updatedFuel = await existingFuel.save();
}   
res.status(200).json({message:"details",savedSales}) 
}catch(err){

}

}

exports.sellDetail=async(req,res,next)=>{
const {id}=req.params;
console.log(req.body)
try{

const findSell = await Sell.findById(id);
console.log(findSell)
if(findSell){

  console.log(findSell)
}  
  res.status(200).json(findSell)

}catch(err){
  res.status(500).json(findsell)
  console.log(err)
}

}