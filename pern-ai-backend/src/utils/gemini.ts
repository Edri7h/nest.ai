// import OpenAI from "openai";
// import dotenv from "dotenv"
// dotenv.config();


// const gemini = new OpenAI({
//     apiKey: process.env.GEMINI_API_KEY,
//     baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
// });

// export default gemini;


// utils/gemini.ts
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("❌ GEMINI_API_KEY is missing in .env");
}

const gemini = new GoogleGenerativeAI(apiKey);

export default gemini;
