import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/user";
import cors from "cors";
import { createServer } from "http";
import danhMucRouter from "./routers/danhMuc";
import routerPhong from "./routers/phongTro"
import routeDichVu from "./routers/dichVu";
import routerThang from "./routers/HoaDonThangRouter";
import schedule from "node-schedule";
import {
  tuDongTaoHoaDon,
  tuDongTaoHoaDonThang,
} from "./controllers/HoaDonTungThangController";
import routeHoaDon from "./routers/hoaDon";
import routerAdmin from "./routers/adminRouter";
import YeuThichRouter from "./routers/yeuThich";
import ThietBiRouter from "./routers/thietBi";
import routerDanhGia from "./routers/danhGia";
import mapRoutes from "./routers/map";
import routerSuaChua from "./routers/SuaChua";
import RouteQuyen from "./routers/quyen";
import routerHopDong from "./routers/hopdong";
import QuyenChucNangRouter from "./routers/quyenChucNang";
import routeImage from "./routers/Image";
import { saveEndOfDayData } from "./controllers/electricityController";
import routerSearch from "./routers/Search";

dotenv.config();

const PORT = process.env.PORT || 3001;
const dbURL = `mongodb+srv://phamtu090303:gSPppVILdD2EJl4g@quanlyphongtro.k5jir.mongodb.net/?retryWrites=true&w=majority`;
// const dbURL = `mongodb://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@mongo:27017/${process.env.DB_NAME}?authSource=admin`;
const app = express();

const server = createServer(app);

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Địa chỉ của frontend
    credentials: true, // Cho phép gửi cookie
  })
);
app.use("/admin", routerAdmin);

app.use("/auth", userRouter);
app.use("/phongTro", routerPhong);
app.use("/danh-muc", danhMucRouter);
app.use("/hoadon", routeHoaDon);
app.use("/yeu-thich", YeuThichRouter);
app.use("/thiet-bi", ThietBiRouter);
app.use("/dich-vu", routeDichVu);
app.use("/hoa-don-thang", routerThang);
app.use("/danh_gia", routerDanhGia);
app.use("/map", mapRoutes);
app.use("/phan_quyen", RouteQuyen);
app.use("/danh_gia", routerDanhGia);
app.use("/hoadon", routeHoaDon);

app.use("/quyenchucnang", QuyenChucNangRouter);
app.use("/hopdong", routerHopDong);
app.use("/Image-phong", routeImage);
app.use("/hoa-don-thang", routerThang);

app.use("/api", routerSearch);
app.use("/sua_chua", routerSuaChua);

const connectDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log(`Connect to db successfully!!!`);
  } catch (error) {
    console.log(`Can not connect to db ${error}`);
  }
};

// Lưu dữ liệu cuối ngày
schedule.scheduleJob("10 22 * * *", saveEndOfDayData);
//*:Phút (0 - 59) *:Giờ (0 - 23) *:Ngày trong (tháng (1 - 31)) *:Tháng (1 - 12)    *:Ngày trong tuần (0 - 7) (Chủ nhật có thể là 0 hoặc 7)


schedule.scheduleJob("59 23 * * *", () => {
  tuDongTaoHoaDonThang(), tuDongTaoHoaDon();
});

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is stating at http:/localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
