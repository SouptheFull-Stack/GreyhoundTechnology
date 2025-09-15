import express from "express";
import blogRoutes from "./blogRoutes.js";
import adminUserRoutes from "./adminUserRoutes.js";

const router = express.Router();

router.use("/blogs", blogRoutes);
router.use("/users", adminUserRoutes);
// TODO: List api endpoint routes for other models once further in

export default router;