import { createAsyncThunk } from "@reduxjs/toolkit";
import { userRequest } from "../Request";
import axios from "axios";

export const userlogin=createAsyncThunk("login",async({email,password})=>{
    try{
    const SigninDetails={email,password};
const res=await userRequest.post("api/auth/signin",SigninDetails);
const user=res.data;
return user;
}catch(err){
    console.log(err)
}

})
export const userRegister=createAsyncThunk("signup",async({name,email,password})=>{
const signupDetails={name,email,password};
try{


const response=await userRequest.post("api/auth/signup",signupDetails)

console.log(response)
}catch(err){
    console.log(err)
}
})

export const Quantitesforproduct=createAsyncThunk("Quantitesforproduct",async({Quantity,fueltype,user})=>{
const product={Quantity,fueltype,user}
console.log(product)

try{
   
const res=await userRequest.post("api/fuel/add",product);    

}catch{
    
}
})


export const FuelSelled=createAsyncThunk("Fuelselled",async({customername,fueltype,Quantity,priced})=>{
const selled={customername,fueltype,Quantity,priced}
console.log(selled)
try{
const res=await userRequest.post("api/selling/selled",selled);
console.log(res.data)
const sellesmade=res.data.savedSales.map((item)=>item);
// return sellesmade.map((item)=>item)
console.log(sellesmade)
return sellesmade
return 
}catch(err){
    console.log(err)
}
})
export const sellDetail=createAsyncThunk("sellDetail",async({id})=>{
const details={id}
const res=await userRequest.post("api/selling/selldetails",details);
console.log(res)



}
)