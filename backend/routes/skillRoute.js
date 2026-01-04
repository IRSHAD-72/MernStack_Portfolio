import express from "express";
import { createSkill,getSkill,updateSkill,deleteSkill } from "../controller/skillController.js";

import protect from "../middleware/authMiddleware.js";

const skillRoutes = express.Router();

skillRoutes.get("/",getSkill);
skillRoutes.post("/",protect,createSkill);
skillRoutes.put("/:id",protect,updateSkill);
skillRoutes.delete("/:id",protect,deleteSkill);

export default skillRoutes;