const User=require("../Model/User")
exports.postsignup=async(req,res,next)=>{
const {firstname,lastname,email,password}=req.body;
const newUser=new User({
    firstname:firstname,
    lastname:lastname,
    email:email,
    password:password,
})
const savedUser=await newUser.save()
res.status(200).json({message:"registered",savedUser});
console.log(req.body);
}
exports.postsignin=async(req,res,next)=>{
const {email,password}=req.body;
try{

const user=await User.findOne({email});
if(user){
    res.status(200).json(user)
}

}catch(err){
    console.log(err)
}
}