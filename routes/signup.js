const jwtsecret = require("../config")
const express = require("express")
const jwt = require("jsonwebtoken")
const userschema = require("../zod")
const User = require("../db").default

const app = express();

const router = express.Router();

router.use("/", async(req , res)=>{
    const success = userschema.safeParse(req.body);
    if(!success.success){
        res.status(411).json({msg:"Error in inputs"});
     }
   const existinguser = await User.findOne({username : req.body.username});
   if(existinguser){
    res.status(404).json({msg : "user exist"})
   }

   const user = await User.create({
    username : req.body.username,
    name : req.body.name,
    password : req.body.password,
    dob : req.body.dob
   })
   
   const userid = user._id;
 
   const token = jwt.sign({userid : userid}, jwtsecret);
   res.json({token : token , msg : "User created successfully"})
     
} )


module.exports = router
