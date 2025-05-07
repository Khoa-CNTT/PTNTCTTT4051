import { Router } from "express";
import {
  storeThietBi,
  updateThietBi,
  getData,
  deleteAll,
  deleteById,
} from "../controllers/thietBi";
import { accessTokenAdmin } from "../middlewares/admin.middleware";
import { authorize } from "../middlewares/authorize.middleware";

const ThietBiRouter = Router();

ThietBiRouter.post(
  "/create",
  accessTokenAdmin,
  authorize("67b1dfa48631e4849450bbd0"),
  storeThietBi
);
ThietBiRouter.post(
  "/update/:id",
  accessTokenAdmin,
  authorize("67b1dfa48631e4849450bbd1"),
  updateThietBi
);
ThietBiRouter.get(
  "/getAll",
  accessTokenAdmin,
  authorize("67b1dfa48631e4849450bbcf"),
  getData
);
ThietBiRouter.delete(
  "/delete/all",
  accessTokenAdmin,
  authorize("67b1dfa48631e4849450bbd3"),
  deleteAll
);
ThietBiRouter.delete(
  "/delete/:id",
  accessTokenAdmin,
  authorize("67b1dfa48631e4849450bbd2"),
  deleteById
);

export default ThietBiRouter;
