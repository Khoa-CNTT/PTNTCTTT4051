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
      token: token, // Trả về token cho người dùng
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message, // Trả về lỗi nếu có
    });
  }
};

export const sendPassword = async (req: Request, res: Response) => {
  try {
    const { user } = req as any;
    const result = await userService.forgotPassword(user._id, user.verify);
    const mailOptions = {
      from: process.env.MAIL_USERNAME,
      to: user.email,
      subject: "Xác thực tài khoản của bạn để đổi mật khẩu",
      text: `Chào ${user.username}, vui lòng xác thực tài khoản của bạn bằng cách nhấp vào liên kết sau: ${process.env.CLIENT_ORIGIN}/reset-password?token=${result}`,
    };
    // Gửi email
    await transporter.sendMail(mailOptions);
    return res.json(result);
  } catch (error: any) {
    return res.status(500).json({
      message: "Đã xảy ra lỗi khi gửi mail.",
      error: error.message,
    });
  }
};

export const verifypassword = async (req: Request, res: Response) => {
  try {
    const { User } = req as any;
    const { New_password, confirm_Password } = req.body;

    if (New_password !== confirm_Password) {
      return res.status(400).json({ message: "Mật khẩu xác nhận không khớp." });
    }
    const result = await userService.ResetPassWord(User._id, New_password);
    return res.json(result);
  } catch (error: any) {
    return res.status(500).json({
      message: "Đã xảy ra lỗi khi đổi mật khẩu.",
      error: error.message,
    });
  }
};
