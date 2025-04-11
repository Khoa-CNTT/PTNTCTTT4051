import { Router } from "express";
import { 
    createYeuThich,
    deleteYeuThich 
} from "../controllers/yeuThich";

const router = Router();
router.post("/create", createYeuThich);
router.delete("/delete/:id_user", deleteYeuThich);

export default router;