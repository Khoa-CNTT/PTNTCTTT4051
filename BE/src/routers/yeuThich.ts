import { Router } from "express";
import { 
    createYeuThich,
    deleteYeuThich, 
    getALLYeuThich, 
    getDataYeuThich,
    getThichPhong
} from "../controllers/yeuThich";

const YeuThichRouter = Router();
YeuThichRouter.post("/create", createYeuThich);
YeuThichRouter.delete("/delete/:id_user", deleteYeuThich);
YeuThichRouter.get("/getdata/:id_user", getDataYeuThich);
YeuThichRouter.get("/getAll", getALLYeuThich);
YeuThichRouter.get("/getThichPhong/:id_user", getThichPhong);
export default YeuThichRouter;