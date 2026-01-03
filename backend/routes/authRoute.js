import express from "express";
import { rgisterAdmin,loginAdmin } from "../controller/authController.js";

const authroutes = express.Router();

authroutes.post("/register",rgisterAdmin);
authroutes.post("/login",loginAdmin);

export default authroutes;