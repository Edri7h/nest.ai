# 🧠 AI Content Generation Platform

This is a full-stack AI-powered content generation platform built with **Node.js**, **TypeScript**, **Prisma**, **Clerk for auth**, and **Google Gemini API** / **ClipDrop API** for generating content like:
<img width="400" height="400" alt="nest ai" src="https://github.com/user-attachments/assets/3f23beb9-7da5-453a-9180-0d51febfe9cb" />
<img width="400" height="400" alt="dashboard" src="https://github.com/user-attachments/assets/b3f7fff5-b578-4ab8-a03f-f08733ba5f3d" />

- ✍️ AI-Generated Articles
- 🧠 Blog Title Suggestions
- 🎨 AI Image Generation
- 🧼 Background Removal from Images

> ⚠️ This project is **partially complete** (approx. 50%). Frontend and backend scaffolding is in place, but API integration on the frontend and full deployment is **not done**.

---

## 📁 Tech Stack

### Backend:
- Express.js + TypeScript
- Prisma ORM with PostgreSQL
- Clerk for authentication
- Gemini API & ClipDrop API
- Multer (for image upload)

### Frontend:
- React + Vite
- Tailwind CSS
- TypeScript
- Axios
- React Router DOM

---

## ✅ Features

- User authentication via Clerk
- Free vs Premium usage limit logic
- Save all generated results (articles, titles, images) to DB
- Integration with:
  - **Gemini 1.5 Flash** (text content)
  - **ClipDrop Text-to-Image API**
  - **ClipDrop Background Removal API**
- Upload images using `multer` and use Cloudinary for storage

---

## 🧪 APIs Implemented

### ✅ Completed:

- `POST /api/ai/generate-article`  
  → Generate article using Gemini API

- `POST /api/ai/generate-blog-titles`  
  → Generate 10 blog titles from prompt

- `POST /api/ai/generate-image`  
  → Generate image using ClipDrop Text-to-Image

- `POST /api/ai/remove-bg`  
  → Remove background from uploaded image using ClipDrop

---

## 🔒 Auth & Limits

- Clerk middleware to get `userId`, `plan`, and `free_usage`
- Free users limited to 10 free generations
- Premium users have unlimited access
- After each generation, free usage is updated via `clerkClient.users.updateUserMetadata`

---

## 📦 Project Structure

/pern-ai-backend/
├── src/
│ ├── controllers/aiController.ts
│ ├── routes/aiRoutes.ts
│ ├── middleware/auth.ts
│ ├── utils/gemini.ts
│ ├── utils/cloudinary.ts
│ └── config/db.config.ts
├── prisma/
│ └── schema.prisma
├── .env
└── README.md



---

## 🖼️ UI Screenshots

> 📸 Upload these in your GitHub repo manually in an `/assets` or `/screenshots` folder and link below.

- ✍️ Article Generator Page
- 🧠 Blog Title Generator UI
- 🎨 Image Generator Page
- 🧼 Remove Background Page

---

## ⌛ Work Left

- [ ] Complete frontend API integrations
- [ ] Show AI-generated content dynamically
- [ ] Error handling + UI alerts
- [ ] Add dark mode + final polish

---

## 🚫 Why I Quit This Project

While the project helped reinforce API calling, Prisma, Clerk, and AI integration, it lacked deeper learning challenges. Functionally, it became repetitive (API → DB → UI), hence I chose to discontinue it midway.

---

## 💡 Learnings

- Working with Gemini + ClipDrop AI APIs
- Using Clerk’s metadata system
- Uploading image buffers and integrating with Cloudinary
- Multer file uploads in memory
- Managing plan-based feature access

---

## ⚙️ Setup

1. Clone the repo:
cd client 
npm i 
cd pern-ai-backend
npm i

env sample
PORT=5000
DATABASE_URL=your_postgres_url
CLERK_SECRET_KEY=your_clerk_secret
GEMINI_API_KEY=your_gemini_key
CLIPDROP_API_KEY=your_clipdrop_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret

