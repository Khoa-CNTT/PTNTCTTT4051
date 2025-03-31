import UserModel from "../models/UserModel";
import bcrypt from "bcryptjs";
import {
  getAccesstoken,
  signverifyEmailToken,

} from "../utils/getAccesstoken";
import { UserVerifyStatus } from "../constants/enum";


export class UserService {
  async registerUser(body: any): Promise<string> {
    const { email, password } = body;
    const user = await UserModel.findOne({ email });
    if (user) {
      throw new Error(`Tài khoản đã tồn tại`);
    }

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);
    body.password = hashpassword;

    // Save new user
    const newUser: any = new UserModel(body);
    const savedUser = await newUser.save();
    const userId = savedUser._id;
    const email_verify_token = await signverifyEmailToken({
      _id: userId,
      verify: UserVerifyStatus.Unverified,
    });

    return email_verify_token; // Trả về token
  }

  async loginUser(user_id: any, verify: UserVerifyStatus): Promise<string> {
    const token = await getAccesstoken({
      _id: user_id,
      verify: verify,
    });
    return token;
  }

  
}

