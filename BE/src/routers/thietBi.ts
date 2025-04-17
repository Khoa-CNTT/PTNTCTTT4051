import { Router } from "express";
import {
  storeThietBi,
  updateThietBi,
  getData,
  deleteAll,
  deleteById,
} from "../controllers/thietBi";
import { accessTokenAdmin } from "../middlewares/admin.middleware";

const ThietBiRouter = Router();

ThietBiRouter.post(
  "/create",
  accessTokenAdmin,
  storeThietBi
);
ThietBiRouter.post(
  "/update/:id",
  accessTokenAdmin,
  updateThietBi
);
ThietBiRouter.get(
  "/getAll",
  accessTokenAdmin,
  getData
);
ThietBiRouter.delete(
  "/delete/all",
  accessTokenAdmin,
  deleteAll
);
ThietBiRouter.delete(
  "/delete/:id",
  accessTokenAdmin,
  deleteById
);

export default ThietBiRouter;
