import { register } from "../controller/auth.controller.js";
import { Router } from "express";

const router = Router();

router.route("/register").post(register);

export default router;
