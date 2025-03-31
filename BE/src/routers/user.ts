import { Router } from "express";
import { LoginValidator } from "../middlewares/user.middleware";
import { userRegisterRequest } from "../request/user.requet";

import { login, register, verifypassword } from "../controllers/user";
const router = Router();

router.post("/register", userRegisterRequest, register);
router.post("/login", LoginValidator, login);
router.post("/reset-password",verifypassword);
export default router;
