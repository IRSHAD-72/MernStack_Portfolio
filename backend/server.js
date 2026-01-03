import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";

import authroutes from "./routes/authRoute.js";
import projectRoutes from "./routes/projectRoute.js";
import skillroutes from "./routes/skillRoute.js";
import router from "./routes/messageRoute.js";

dotenv.config();
connectDb();

const app = express();
//middleware
 app.use(cors({
    origin:"*",
    methods:["GET","POST","PUT","DELETE"]
 }));
 app.use(express.json());

 // Health check
 app.get("/",(req,res)=>{
    res.status(200).json({message:"Portfolio Backend Running"});
 });
//API ROUTES
 app.use("/api/auth",authroutes)
 app.use("/api/projects",projectRoutes);
 app.use("/api/messages",router);
 app.use("/api/skill",skillroutes);

 //error handler

 app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({message:"Server Error"});
    
 });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT,  ()=>console.log(`server is running on ${PORT}`));
 