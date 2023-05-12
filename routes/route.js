import express from "express";
import { saveApplicant } from "../controllers/UserController.js";
import upload from "../config/file-config.js";

const router = express.Router();

router.post("/applicant", upload, saveApplicant);

export default router;
