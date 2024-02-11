const User=require("../Model/User")
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken")
exports.postsignup=async(req,res,next)=>{
const {name,email,password}=req.body;
console.log(req.body)
const newUser=new User({
    name:name,
    email:email,
    password:password,
})
try{
 const token=await newUser.generateAuthToken();
    const savedUser = await newUser.save();
    res.status(201).json(savedUser)
}catch(error){
 console.log(error);
    res.status(500).json(error);
}

}
exports.postsignin=async(req,res,next)=>{
 const {email,password}=req.body;
    console.log({email,password})
   try{
    const user=await User.findOne({email})
if(user){
    const isMatch=await bcrypt.compare(password,user.password) 
  const secret=user._id + process.env.ONE_SECRET_KEY;
  const accessToken=jwt.sign({userId:user._id,name:user.name},secret,
    {expiresIn:"3d"
});  
  console.log(user)
  res.status(200).json({message:"loggedIn",user,accessToken})
   }else{
    res.status(400)
   }}catch(err){

   }
}