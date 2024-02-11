const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken")
const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const UserSchema=new Schema({
name:{
    type:String,
    required:true,
},
email:{
     type:String,
    required:true,
},
password:{
     type:String,
    required:true,
},
role:{
     type:String,
    required:true,
    default:"employee"
},
 tokens:[{
            token:{
                type:String,
                required:true,
            }
        }], 

})
UserSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,10);
    }

})
UserSchema.methods.generateAuthToken=async function(){
    try{
const token=jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY)
this.tokens=this.tokens.concat({token:token})
await this.save();
return token
    }catch(error){
console.log(error)
    }
}

module.exports=mongoose.model("User",UserSchema);

