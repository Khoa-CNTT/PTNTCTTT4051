import { Router } from "express";
import { CreateDichVu, DeleteDichVu, GetAllDichVu, UpdateDichVu } from "../controllers/dichVuController";
import { accessTokenAdmin } from "../middlewares/admin.middleware";
const routeDichVu =Router()

routeDichVu.post('/creat',accessTokenAdmin, CreateDichVu)
routeDichVu.delete('/delete/:id',accessTokenAdmin, DeleteDichVu)
routeDichVu.post('/update/:id',accessTokenAdmin, UpdateDichVu)
routeDichVu.get('/getAll',accessTokenAdmin, GetAllDichVu)

export default routeDichVu;