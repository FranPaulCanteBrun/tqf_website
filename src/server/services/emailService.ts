import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendEmail = async (emailOptions: any) => {
  try {
    const info = await transporter.sendMail(emailOptions);
    console.log("Email sent: " + info.response);
    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error };
  }
};
