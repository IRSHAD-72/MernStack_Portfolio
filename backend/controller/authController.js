import Admin from "../Models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const rgisterAdmin = async (req,res)=>{
    const {email,password}= req.body;
const admin = await Admin.create({email,password});
res.json(admin);
};

export const loginAdmin = async (req,res)=>{
    const {email,password} = req.body;
    const admin = await Admin.findOne({email});

if(!admin|| !(await bcrypt.compare(password,admin.password))){
    return res.status(401).json({message:"Invalid credentials"});
}
const token = jwt.sign({id:admin._id},process.env.JWT_SECRET,{
    expiresIn:"1d"
});
res.json({token})
}