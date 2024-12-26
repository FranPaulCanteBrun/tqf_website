import { Router } from "express";
import { handleContactForm } from "../controllers/emailController.js";
import asyncHandler from "../utils/asyncHandler.js";

const router = Router();

// Post Route for the Form
router.post("/send-email", asyncHandler(handleContactForm));

export default router;
