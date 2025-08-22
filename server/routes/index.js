import express from "express";
import apiRoutes from "./api/index.js";
import homeRoute from "./homeRoute.js";

const router = express.Router();

router.use("/api", apiRoutes);
router.use("/", homeRoute);

export default router;