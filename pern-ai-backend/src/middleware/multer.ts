import multer from "multer";

// Configure in-memory storage
const storage = multer.memoryStorage();

// Export middleware for handling single file upload (field name: "file")
export const singleUpload = multer({ storage }).single("file");
