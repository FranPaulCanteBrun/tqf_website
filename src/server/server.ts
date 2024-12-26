import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import emailRoutes from "./routes/emailRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

export const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:4321",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api", emailRoutes);

// Global Error Handler
app.use(errorHandler);

// Server port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
