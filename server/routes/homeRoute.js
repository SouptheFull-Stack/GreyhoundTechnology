import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
     res.send("home route hit");
});

export default router;