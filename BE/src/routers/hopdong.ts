import express from "express";
import {
  createContract,
  customer,
  detailContract,
  extendContract,
} from "../controllers/hopDong";
import { accessTokenValidatetor } from "../middlewares/user.middleware";
const routerHopDong = express.Router();

routerHopDong.get("/customer", accessTokenValidatetor, customer);
routerHopDong.post("/create", accessTokenValidatetor, createContract);
routerHopDong.get("gia_han_hop_dong/:ma_phong", extendContract);
routerHopDong.get("/detail", accessTokenValidatetor, detailContract);
export default routerHopDong;
