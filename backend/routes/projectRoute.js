import express from "express";
import { createProject,getProjectById,getProjects,updateProject,deleteProject } from "../controller/projectController.js";

import protect from "../middleware/authMiddleware.js";

const projectRoutes = express.Router();

projectRoutes.get("/",getProjects);
projectRoutes.get("/:id",getProjectById);
projectRoutes.post("/",protect,createProject);
projectRoutes.put("/:id",updateProject);
projectRoutes.delete("/:id",deleteProject);

export default projectRoutes;