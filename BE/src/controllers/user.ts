import dotenv from "dotenv";
import { UserService } from "../services/UserService";
import { Request, Response } from "express";
import nodemailer from "nodemailer";

dotenv.config();
const userService = new UserService();
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

export const register = async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const email_verify_token = await userService.registerUser(body);
    const mailOptions = {
      from: process.env.MAIL_USERNAME,
      to: body.email,
      subject: "Xác thực tài khoản của bạn",
      text: `Chào ${body.username}, vui lòng xác thực tài khoản của bạn bằng cách nhấp vào liên kết sau: ${process.env.CLIENT_ORIGIN}/verify-email?token=${email_verify_token}`,
    };
    //cấu hình gửi email
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      message: "Đăng ký thành công!",
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
    });
  }
};
export const login = async (req: Request, res: Response) => {
  const { user }: any = req; // Lấy thông tin người dùng từ request
  try {
    const token = await userService.loginUser(user._id, user.verify);

    res.status(200).json({
      message: "Login successfully!!!",
      data: {
        token,
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          hovaten: user.ho_va_ten,
          ngaysinh: user.ngay_sinh,
          sdt: user.so_dien_thoai,
          gioi_tinh: user.gioi_tinh,
          cccd: user.cccd,
        },
      },
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message, // Trả về lỗi nếu có
    });
  }
};


