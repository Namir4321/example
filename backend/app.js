const express=require("express")
var cors = require('cors')
const bodyParser = require("body-parser");
const AuthRoute=require("./routes/Authroute");
const mongoose=require("mongoose");
const app=express();
const port=8080;
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({
    origin:"*",
    credentials: true,
}))
app.use("/api/auth",AuthRoute);
mongoose.connect("mongodb://127.0.0.1:27017/rolebased", { useNewUrlParser: true, useUnifiedTopology: true })

app.listen(8080,()=>{
    console.log(`listing on port ${port}`)
})

