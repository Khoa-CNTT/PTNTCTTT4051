import { Router } from "express";
import { 
    createYeuThich,
    deleteYeuThich 
} from "../controllers/yeuThich";

const YeuThichRouter = Router();
YeuThichRouter.post("/create", createYeuThich);
YeuThichRouter.delete("/delete/:id_user", deleteYeuThich);

export default YeuThichRouter;