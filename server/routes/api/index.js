import express from "express";
import blogRoutes from "./blogRoutes.js";

const router = express.Router();

router.use("/blogs", blogRoutes);
// TODO: List api endpoint routes for other models once further in

export default router;