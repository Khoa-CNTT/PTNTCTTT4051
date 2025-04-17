import { Router } from "express";

import {
  accessTokenAdmin,
  forgotPasswordAdmin,
  LoginAdminValidator,
  ResetPasswordAdmin,
} from "../middlewares/admin.middleware";
import { createAdmin, deleteAdmin, getAdmin, getAllAdmin, loginAdmin, resetPasswordAdmin, sendPasswordAdmin, updateAdmin } from "../controllers/adminController";

const routerAdmin = Router();

routerAdmin.post("/login", LoginAdminValidator, loginAdmin);
routerAdmin.post("/create", createAdmin);
routerAdmin.post("/update/:id", accessTokenAdmin, updateAdmin);
routerAdmin.delete("/delete/:id", deleteAdmin);
routerAdmin.post(
  "/resend-forgot-password",
  forgotPasswordAdmin,
  sendPasswordAdmin
);
routerAdmin.post("/reset-password", ResetPasswordAdmin, resetPasswordAdmin);
routerAdmin.get("/getadmin", accessTokenAdmin, getAdmin);
routerAdmin.get("/getAll", getAllAdmin);

export default routerAdmin;
