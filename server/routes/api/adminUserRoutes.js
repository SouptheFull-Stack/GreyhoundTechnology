import express from "express";
import { createAdminUser, getAllAdminUsers, getAdminUserById } from "../../controllers/adminUserController.js";

const router = express.Router();

router.post("/", createAdminUser);
router.get("/", getAllAdminUsers);
router.get("/:id", getAdminUserById);
// router.put("/:id", updateBlog);
// router.delete("/:id", deleteBlog);

export default router;
