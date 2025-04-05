import { Router } from "express";
import { accessTokenValidatetor, forgotPasswordValidator, LoginValidator, ResetPasswordValidator } from "../middlewares/user.middleware";
import { userRegisterRequest } from "../request/user.requet";

import { getAllUser, getDetailUser, getMe, login, register, sendPassword, updateUser, verifypassword } from "../controllers/user";
const router = Router();

router.post("/register", userRegisterRequest, register);
router.post("/login", LoginValidator, login);
router.post("/resend-forgot-password",forgotPasswordValidator, sendPassword);
router.post("/reset-password",ResetPasswordValidator,verifypassword);
router.get("/Detail/:id", getDetailUser);
router.post("/update/:id", accessTokenValidatetor, updateUser);
router.get("/me", accessTokenValidatetor, getMe);
router.get("/AllUser", getAllUser);
export default router;
