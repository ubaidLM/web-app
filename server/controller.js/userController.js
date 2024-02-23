import User from "../model/User.js";


const adduser = async(req,res)=>{
    const {username,password}=req.body;
    const user = new User({username,password});
    try {
        await user.save();
        res.json({msg:"you are added succesfully"})
    } catch (error) {
         console.log(error)
    }
}

const verifyUser = async(req,res)=>{
    const {username,password}=req.body;
    
    try {
      const user=await User.findOne({username,password})
      if(user){
        return res.json({status:true})
      }else{
        return res.json({status:false})
      }
    } catch (error) {
         console.log(error)
    }
}

export  {adduser,verifyUser}