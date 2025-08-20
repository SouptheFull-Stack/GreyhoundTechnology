import express from "express";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", makeNewNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
