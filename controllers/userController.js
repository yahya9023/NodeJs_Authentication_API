const User = require("../models/User");
const jwt = require('jsonwebtoken')

const createUser = async (req, res) => {
  try{
    const user = await User.create(req.body)
    res.status(201).json({success: true, message: "USER HAS BEEN SAVED", data: user})
  }catch({errors}){
    const errorResponse = Object.keys(errors).map( error => {
      return {
        name: error,
        message: errors[error].message
      }
    })
    res.status(404).json({success: false,  message: "USER NOT SAVED" , error: errorResponse})
  }
}



signIn = async (req,res)=>{

  const user = await User.findOne({
      email: req.body.email
  },(err,reslt)=>{
      if(err){
          res.send('error')
          console.log(err)
      }else{
          console.log(reslt)
      }
  }).clone()

  if(req.body.email == user.email && req.body.password == user.password ){
      const payload = {
        email: user.email
      }
      const token = jwt.sign(payload,process.env.SECRET,{
          expiresIn: "10d"
      })

      res.status(200).json({
          token: token,
      })
  }
}


module.exports = {
  createUser,
  signIn
}