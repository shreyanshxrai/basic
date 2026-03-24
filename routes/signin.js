const jwtsecret = require("../config")
const express = require("express")
const jwt = require("jsonwebtoken")
const userschema = require("../zod")
const User = require("../db").default
const app = express();
const router = express.Router();


router.post("/", async (req , res) => {
    const success = await userschema.safeParse(req.body);
    if(!success.success){
        res.status(411).json({
            msg : "invalid inputs"
        })
    }
    const user = await User.findOne({username : req.body.username , password : req.body.password});
    if (!user){
        res.status(404).json({
            msg : "No user found!"
        })
    };
    const userid = user._id;
    const token = jwt.sign({userid : userid}, JWT_SECRET);
    
    res.json({token : token , msg: "user logged in!"})

})


module.exports= router