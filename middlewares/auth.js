
const jwt = require('jsonwebtoken')



const auth = (req,res,next)=>{
   const token = req.header('access-token');
   if(!token){
       res.status(401).send('no token provided')
   }
   try {
    const decoded = jwt.verify(token,'test');
    req.user=decoded;
    next()
   } catch (error) {
       res.status(500).send('invalid token')
   }
   
  
}


module.exports=auth