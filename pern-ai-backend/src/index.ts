import express from "express";
import dotenv from "dotenv";
import cors,{CorsOptions} from "cors";
import { PrismaClient } from "@prisma/client";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import { generateArticle } from "./controllers/aiController.js";
// Load environment variables
import aiRoutes from "./routes/aiRoutes.js"
dotenv.config();

// Create Express app
const app = express();

// Middleware
const corsOptions:CorsOptions={
     origin: "*",           
  credentials: true,
}
app.use(
    cors(corsOptions)
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware());

// app.use(requireAuth());

// Prisma instance
// const prisma = new PrismaClient();

// Routes
// import geminiRoutes from "./routes/geminiRoutes";
// import projectRoutes from "./routes/projectRoutes";

// API base routes
app.use("/api/ai",requireAuth(),aiRoutes);      // e.g., /api/ai/article, /api/ai/blog-titles
// app.use("/api/projects", projectRoutes); // e.g., /api/projects (save/get)

// Health check
app.get("/", (_req, res) => {
  res.send("🚀 Nest.ai backend is up and running.");
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server listening at http://localhost:${PORT}`);
});
