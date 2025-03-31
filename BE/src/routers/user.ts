import { Router } from "express";
import { LoginValidator } from "../middlewares/user.middleware";
import { userRegisterRequest } from "../request/user.requet";

import { login, register } from "../controllers/user";
const router = Router();

router.post("/register", userRegisterRequest, register);
router.post("/login", LoginValidator, login);
export default router;
