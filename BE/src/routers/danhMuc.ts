import { Router } from "express";
import {storeDanhMuc} from "../controllers/danhMuc";
const router = Router();

router.post("/create",storeDanhMuc);


export default router;
