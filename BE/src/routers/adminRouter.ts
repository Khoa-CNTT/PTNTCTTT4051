import { Router } from "express";

import {
  accessTokenAdmin,
  LoginAdminValidator,
} from "../middlewares/admin.middleware";
import { createAdmin, deleteAdmin, getAdmin, getAllAdmin, loginAdmin, updateAdmin } from "../controllers/adminController";

const routerAdmin = Router();

routerAdmin.post("/login", LoginAdminValidator, loginAdmin);
routerAdmin.post("/create", createAdmin);
routerAdmin.post("/update/:id", accessTokenAdmin, updateAdmin);
routerAdmin.delete("/delete/:id", deleteAdmin);
routerAdmin.get("/getadmin", accessTokenAdmin, getAdmin);
routerAdmin.get("/getAll", getAllAdmin);

export default routerAdmin;
