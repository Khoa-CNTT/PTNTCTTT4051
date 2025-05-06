import { Router } from "express";
import {
  createImage,
  updateImage,
} from "../controllers/ImagePhongController";
import { accessTokenAdmin } from "../middlewares/admin.middleware";
import { authorize } from "../middlewares/authorize.middleware";

const routeImage = Router();
routeImage.post("/create",accessTokenAdmin,authorize("67b1dfa48631e4849450bbbc"), createImage);
routeImage.post("/update/:ma_phong",accessTokenAdmin,authorize("67b1dfa48631e4849450bbbd"), updateImage);

export default routeImage;
