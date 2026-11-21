import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import serverless from "serverless-http";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Core Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true
}));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Basic Health Check Endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "MyPortfolio Backend API",
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Root API Greeting
app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Abu Fazal Portfolio API is operational.",
    version: "1.0.0"
  });
});

// Fallback 404 handler for unknown API routes (Express 5 compatible)
app.use("/api", (req, res) => {
  res.status(404).json({
    error: "API endpoint not found"
  });
});

// Local development server listener (skipped in test & production)
if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`[Backend] Server running on http://localhost:${PORT}`);
  });
}

// Export app and serverless handler for Vercel
export default app;
export const handler = serverless(app);
