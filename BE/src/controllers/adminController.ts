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

export const createAdmin = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    await adminService.createAdminService(data);

    res.status(200).json({
      message: "Admin đã được tạo thành công",
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const updateAdmin = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await adminService.updateAdminService(id, data);
    res.status(200).json({
      message: "Admin đã được cập nhật thành công",
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const deleteAdmin = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await adminService.deleteAdminService({ id });

    res.status(200).json({
      message: "Đã xóa Admin thành công!",
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const getAdmin = async (req: any, res: any) => {
  try {
    const admin = req.admin;

    if (!admin) {
      return res.status(404).json({ message: "admin không tồn tại." });
    }
    const data = await adminService.getAdmin(admin._id);

    res.status(200).json({
      status: 200,
      data: data,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Lỗi khi lấy thông tin admin.",
      error: error.message,
    });
  }
};

export const getAllAdmin = async (req: any, res: any) => {
  try {
    const data = await adminService.getAdminAll();
    res.status(200).json({
      status: 200,
      data: data,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Lỗi khi lấy thông tin người dùng.",
      error: error.message,
    });
  }
};