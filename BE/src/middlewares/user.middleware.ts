import bcrypt from 'bcryptjs';
import UserModel from '../models/UserModel'; 
import { verifyToken } from '../utils/getAccesstoken';

export const accessTokenValidatetor = async (req: any, res: any, next: any) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({ message: 'Bạn Chưa đăng nhập' });
        }
        const accessToken = authHeader.split(' ')[1];
        const decoded = await verifyToken(accessToken, process.env.JWT_SECRET_ACCESS_TOKEN as string);
        const user = await UserModel.findById(decoded._id);  
        if (!user) {
            return res.status(401).json({ message: "Tài khoản không tồn tại!" });
        }
        req.user = user;
        next();
    }catch (error: any) {
        return res.status(500).json({ message: 'Phiên đăng nhập không hợp lệ!', error: error.message });
    }
}

export const LoginValidator = async (req: any, res: any, next: any) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Vui lòng nhập email và mật khẩu.' });
        }
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Người dùng không tồn tại.' });
        } else if (!user.password) {
            return res.status(401).json({ message: 'Email hoặc mật khẩu không chính xác.' });
        } else if (user.verify == 0) {
            return res.status(401).json({ message: 'Email chưa được xác thực. Vui lòng xác thực email' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Email hoặc mật khẩu không chính xác.' });
        }
        req.user = user;
        next();
    } catch (error: any) {
        return res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình xác thực.', error: error.message });
    }
};

export const forgotPasswordValidator = async (req:any,res:any,next:any) =>{
    try {
        const email =req.body
        console.log(email)
        const resuil =await UserModel.findOne(email)
        if(!resuil){
            return res.status(400).json({ message: 'Email không đúng!!!' });
        }
       req.user = resuil
       next();
    } catch (error:any) {
        return res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình xác thực.', error: error.message });
    }
}