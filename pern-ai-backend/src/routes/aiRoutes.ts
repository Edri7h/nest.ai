import express from "express";
import { generateArticle, generateBlogTitles,  generateImageFromText, insertTextBehindObjects } from "../controllers/aiController.js";
import { auth } from "../middleware/auth.js";
import { singleUpload } from "../middleware/multer.js";
const router =express.Router();


router.route('/generate-article').post(auth,generateArticle);
router.route('/generate-blog').post(auth,generateBlogTitles);
router.route('/generate-image').post(auth,generateImageFromText);
router.route('/insert-text').post(auth,singleUpload,insertTextBehindObjects);



export default router;