import { Router } from "express";
import { forgotPasswordValidator, LoginValidator, ResetPasswordValidator } from "../middlewares/user.middleware";
import { userRegisterRequest } from "../request/user.requet";

import { login, register, sendPassword, verifypassword } from "../controllers/user";
const router = Router();

router.post("/register", userRegisterRequest, register);
router.post("/login", LoginValidator, login);
router.post("/resend-forgot-password",forgotPasswordValidator, sendPassword);
router.post("/reset-password",ResetPasswordValidator,verifypassword);
export default router;
