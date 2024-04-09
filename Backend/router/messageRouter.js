// messageRouter.js
import express from "express";
import { sendMessage } from "../controller/messageController.js"; // Check this line

const router = express.Router();

router.post("/send", sendMessage);

export default router;
