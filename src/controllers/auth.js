import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export async function register(req,res){
 const {email,password}=req.body;
 const hashed=await bcrypt.hash(password,10);
 await User.create({email,password:hashed});
 res.sendStatus(201);
}
export async function login(req,res){
 const {email,password}=req.body;
 const u=await User.findOne({email});
 if(!u)return res.sendStatus(401);
 const ok=await bcrypt.compare(password,u.password);
 if(!ok)return res.sendStatus(401);
 const token=jwt.sign({id:u._id},'secret');
 res.json({token});
}