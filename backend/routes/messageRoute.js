import express from "express";
import { sendMessage,getMessage,deleteMessage } from "../controller/messageController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/",sendMessage);
router.get("/",protect,getMessage);
router.get("/:id",protect,deleteMessage);

export default router;