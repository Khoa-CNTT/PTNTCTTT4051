import { Router } from "express";

import {
  LoginAdminValidator,
} from "../middlewares/admin.middleware";
import { loginAdmin } from "../controllers/adminController";

const routerAdmin = Router();

routerAdmin.post("/login", LoginAdminValidator, loginAdmin);

export default routerAdmin;
