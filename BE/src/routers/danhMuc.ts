import { Router } from "express";
import {
    storeDanhMuc,
    updateDanhMuc,
    getData,
    deleteAll,
    deleteById,
  } from "../controllers/danhMuc";
import { accessTokenAdmin } from "../middlewares/admin.middleware";
const router = Router();

router.post("/create",storeDanhMuc);
router.post("/update/:id", accessTokenAdmin, updateDanhMuc);
router.get("/getAll", getData);
router.delete("/delete/all", accessTokenAdmin, deleteAll);
router.delete("/delete/:id", accessTokenAdmin, deleteById);

export default router;
