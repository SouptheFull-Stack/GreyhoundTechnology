import express from "express";

const router = express.Router();

router.post("/", createBlog);
router.get("/", getBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
