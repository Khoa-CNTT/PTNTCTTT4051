import dotenv from "dotenv";
import { DanhMucService } from "../services/DanhMucService";
dotenv.config();

const danhMucService = new DanhMucService();

const storeDanhMuc = async (req: any, res: any) => {
  const body = req.body;
  try {

    await danhMucService.createDanhMuc(body);

    res.status(200).json({
      message: "Danh mục đã được tạo thành công",
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
    });
  }
};


export { storeDanhMuc };
