import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/user";
import cors from "cors";
import { createServer } from "http";
import routerPhong from "./routers/phongTro";
import routeDichVu from "./routers/dichVu";

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

app.use("/auth", userRouter);
app.use("/phongTro", routerPhong);

app.use("/dich-vu", routeDichVu);
const connectDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log(`Connect to db successfully!!!`);
  } catch (error) {
    console.log(`Can not connect to db ${error}`);
  }
};

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is stating at http:/localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
