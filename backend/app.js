require("dotenv").config();
const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const cors=require("cors")
const app=express();
const port=process.env.PORT||8000;
const AuthRoute=require("./Routes/AuthRoutes");
const FuelRoute=require("./Routes/FuelRoutes");
const SellRoute=require("./Routes/SelledRoutes");
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    origin:"http://localhost:3000",
    credentials: true,
}))
app.use("/api/auth",AuthRoute);
app.use("/api/fuel",FuelRoute);
app.use("/api/selling",SellRoute)
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("connected")
})
app.listen(port,()=>{
    console.log(`listning on port ${port}`)

})
