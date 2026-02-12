import { login, register } from "../controller/auth.controller.js";
import { Router } from "express";
import { validateRequest } from "../middlewares/validator.middelware.js";
import {
  registerUserValidator,
  loginUserValidator,
} from "../validators/index.js";

const router = Router();

router
  .route("/register")
  .post(registerUserValidator(), validateRequest, register);

router.route("/login").post(loginUserValidator(), validateRequest, login);

export default router;
