import express from "express";
import { createSkill,getSkill,updateSkill,deleteSkill } from "../controller/skillController.js";

import protect from "../middleware/authMiddleware.js";

const skillroutes = express.Router();

skillroutes.get("/",getSkill);
skillroutes.post("/",protect,createSkill);
skillroutes.put("/:id",updateSkill);
skillroutes.delete("/:id",deleteSkill);

export default skillroutes;