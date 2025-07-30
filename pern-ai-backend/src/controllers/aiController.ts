import { Request, Response } from "express";
import gemini from "../utils/gemini.js";
import prisma from "../utils/db.config.js";
import { clerkClient } from "@clerk/express";
import genAI from "../utils/genai.js";
import cloudinary from "../utils/cloudinary.js";
import axios from "axios";
import FormData from "form-data";

// ARTICLE GENERATION
// export const generateArticle = async (req: Request, res: Response) => {
//   try {
//     const { userId } = await req.auth();
//     const { prompt, length } = req.body;
//     const plan = req.plan;
//     const free_usage = req.free_usage ?? 0;

//     if (plan !== "premium" && free_usage >= 10) {
//       return res.status(403).json({
//         success: false,
//         message: "Limit reached. Upgrade to Pro plan to continue.",
//       });
//     }

//     const response = await gemini.chat.completions.create({
//       model: "gemini-2.0-flash",
//       messages: [{ role: "user", content: prompt }],
//       temperature: 0.7,
//       max_tokens: Number(length),
//     });

//     const content = response.choices[0]?.message?.content;

//     const project = await prisma.project.create({
//       data: {
//         userId,
//         title: prompt.slice(0, 50) + "...",
//         type: "article",
//         prompt,
//         content,
//       },
//     });

//     // ✅ Preserve old metadata while updating free_usage
//     if (plan === "free") {
//       const user = await clerkClient.users.getUser(userId);
//       await clerkClient.users.updateUserMetadata(userId, {
//         privateMetadata: {
//           ...user.privateMetadata,
//           free_usage: free_usage + 1,
//         },
//       });
//     }

//     res.status(200).json({
//       success: true,
//       content,
//       project,
//     });
//   } catch (error: any) {
//     console.error("❌ Error generating article:", error);
//     res.status(500).json({
//       success: false,
//       message: "Something went wrong.",
//       error: error.message,
//     });
//   }
// };


export const generateArticle = async (req: Request, res: Response) => {
  try {
    const { userId } = await req.auth();
    const { prompt, length } = req.body;
    const plan = req.plan;
    const free_usage = req.free_usage ?? 0;

    if (plan !== "premium" && free_usage >= 10) {
      return res.status(403).json({
        success: false,
        message: "Limit reached. Upgrade to Pro plan to continue.",
      });
    }

    // Use Gemini official SDK
    const model = gemini.getGenerativeModel({ model: "models/gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response =  result.response;
    const content = response.text();

    const project = await prisma.project.create({
      data: {
        userId,
        title: prompt.slice(0, 50) + "...",
        type: "article",
        prompt,
        content,
      },
    });

    // Update free_usage
    if (plan === "free") {
      const user = await clerkClient.users.getUser(userId);
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
          ...user.privateMetadata,
          free_usage: free_usage + 1,
        },
      });
    }

    res.status(200).json({ success: true, content, project });
  } catch (error: any) {
    console.error("❌ Error generating article:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong.",
      error: error.message,
    });
  }
};


// BLOG TITLE GENERATION
// export const generateBlogTitles = async (req: Request, res: Response) => {
//   try {
//     const { userId } = await req.auth();
//     const { prompt } = req.body;
//     const plan = req.plan;
//     const free_usage = req.free_usage ?? 0;

//     if (plan !== "premium" && free_usage >= 10) {
//       return res.status(403).json({
//         success: false,
//         message: "Limit reached. Upgrade to Pro plan to continue.",
//       });
//     }

//     const response = await gemini.chat.completions.create({
//       model: "gemini-2.0-flash",
//       messages: [{
//         role: "user",
//         content: `Generate 10 catchy blog titles for this topic:\n\n"${prompt}"`,
//       }],
//       temperature: 0.7,
//       max_tokens: 300,
//     });

//     const content = response.choices[0]?.message?.content;

//     const project = await prisma.project.create({
//       data: {
//         userId,
//         title: `Blog Titles for: ${prompt.slice(0, 40)}...`,
//         type: "blog_titles",
//         prompt,
//         content,
//       },
//     });

//     // ✅ Update free usage
//     if (plan === "free") {
//       const user = await clerkClient.users.getUser(userId);
//       await clerkClient.users.updateUserMetadata(userId, {
//         privateMetadata: {
//           ...user.privateMetadata,
//           free_usage: free_usage + 1,
//         },
//       });
//     }

//     res.status(200).json({
//       success: true,
//       content,
//       project,
//     });
//   } catch (error: any) {
//     console.error("❌ Error generating blog titles:", error);
//     res.status(500).json({
//       success: false,
//       message: "Something went wrong.",
//       error: error.message,
//     });
//   }
// };


export const generateBlogTitles = async (req: Request, res: Response) => {
  try {
    const { userId } = await req.auth();
    const { prompt } = req.body;
    const plan = req.plan;
    const free_usage = req.free_usage ?? 0;

    if (plan !== "premium" && free_usage >= 10) {
      return res.status(403).json({
        success: false,
        message: "Limit reached. Upgrade to Pro plan to continue.",
      });
    }

    const model = gemini.getGenerativeModel({ model: "models/gemini-1.5-flash" });

    const result = await model.generateContent(
      `Generate 10 catchy blog titles for this topic:\n\n"${prompt}"`
    );
    const response =  result.response;
    const content = response.text();

    const project = await prisma.project.create({
      data: {
        userId,
        title: `Blog Titles for: ${prompt.slice(0, 40)}...`,
        type: "blog_titles",
        prompt,
        content,
      },
    });

    if (plan === "free") {
      const user = await clerkClient.users.getUser(userId);
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
          ...user.privateMetadata,
          free_usage: free_usage + 1,
        },
      });
    }

    res.status(200).json({
      success: true,
      content,
      project,
    });
  } catch (error: any) {
    console.error("❌ Error generating blog titles:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong.",
      error: error.message,
    });
  }
};



//gen-images





// Initialize Gemini





// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export const generateImageFromText = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
     const plan = req.plan;
    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required.",
      });
    }
    if(plan !== 'premium'){
         return res.status(403).json({
        success: false,
        message: "Upgrade to Pro plan to continue.",
      });
    }

    const form = new FormData();
    form.append("prompt", prompt);

    const clipdropResponse = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      form,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API_KEY!,
        },
        responseType: "arraybuffer", // ensure we get raw image buffer
      }
    );

    const buffer = Buffer.from(clipdropResponse.data, "binary");
    const base64Image = buffer.toString("base64");

    const uploadResult = await cloudinary.uploader.upload(
      `data:image/png;base64,${base64Image}`,
      { folder: "clipdrop-images" }
    );

    res.status(200).json({
      success: true,
      imageUrl: uploadResult.secure_url,
    });
  } catch (error: any) {
    console.error("❌ Image generation error:", error.message || error);
    res.status(500).json({
      success: false,
      message: "Image generation failed.",
      error: error.message || "Unknown error",
    });
  }
};





export const insertTextBehindObjects = async (req: Request, res: Response) => {
  try {
    const plan = req.plan;
    const file = req.file;
    const { text } = req.body;

    if (!file || !text) {
      return res.status(400).json({
        success: false,
        message: "Image file and text are required.",
      });
    }

    if (plan !== "premium") {
      return res.status(403).json({
        success: false,
        message: "Upgrade to Pro plan to use this feature.",
      });
    }

    const form = new FormData();
    form.append("image_file", file.buffer, {
      filename: file.originalname,
      contentType: file.mimetype,
    });
    form.append("text", text);

    const clipdropResponse = await axios.post(
      "https://clipdrop-api.co/reimagine/v1/reimagine",
      form,
      {
        headers: {
        // ✅ IMPORTANT
          "x-api-key": process.env.CLIPDROP_API_KEY!,
        },
        responseType: "arraybuffer",
      }
    );

    const buffer = Buffer.from(clipdropResponse.data, "binary");
    const base64Image = buffer.toString("base64");

    const uploadResult = await cloudinary.uploader.upload(
      `data:image/png;base64,${base64Image}`,
      { folder: "clipdrop-text-behind" }
    );

    res.status(200).json({
      success: true,
      imageUrl: uploadResult.secure_url,
    });
  } catch (error: any) {
    console.error("❌ Clipdrop Error:", error.message || error);
    res.status(500).json({
      success: false,
      message: "Image processing failed.",
      error: error.message || "Unknown error",
    });
  }
};

