import { Request, Response } from "express";
import { sendEmail } from "../services/emailService.js";

// Controller
export const handleContactForm = async (req: Request, res: Response) => {
  const { name, phone, email, subject, message } = req.body;

  // Validation the fields
  if (!name || !phone || !email || !subject || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    // Send the email
    await sendEmail(name, phone, email, subject, message);

    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
};
