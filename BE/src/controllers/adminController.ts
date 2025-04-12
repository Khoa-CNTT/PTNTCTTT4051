import { Request, Response } from "express";
import dotenv from "dotenv";
import { AdminService } from "../services/AdminServiec";


dotenv.config();

const adminService = new AdminService();

export const loginAdmin = async (req: Request, res: Response) => {
  try {
    const { admin } = req as any;

    const token = await adminService.loginAdminService(admin._id, admin.verify);

    return res.json({
      message: "Login thành công!",
      data: {
        token,
        admin: {
          id_quyen: admin.id_quyen,
          email: admin.email,
          username: admin.username,
          hovaten: admin.ho_va_ten,
          ngaysinh: admin.ngay_sinh,
          sdt: admin.so_dien_thoai,
          gioi_tinh: admin.gioi_tinh,
          cccd: admin.cccd,
          is_block: admin.is_block,
        },
      },
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Đã xảy ra lỗi khi đăng nhập.",
      error: error.message,
    });
  }
};
