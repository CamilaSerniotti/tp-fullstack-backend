import jwt from 'jsonwebtoken';
export default (req,res,next)=>{
 const h=req.headers.authorization;
 if(!h)return res.sendStatus(401);
 const token=h.split(' ')[1];
 try{
  const data=jwt.verify(token,'secret');
  req.user=data;
  next();
 }catch(e){res.sendStatus(401);}
};