import {
  getAccesstokenAdmin,
} from "../utils/getAccesstoken";
import { UserVerifyStatus } from "../constants/enum";
import AdminModel from "../models/AdminModel";
import bcrypt from "bcryptjs";

export class AdminService {
  async loginAdminService(
    user_id: any,
    verify: UserVerifyStatus
  ): Promise<string> {
    const token = await getAccesstokenAdmin({
      _id: user_id,
      verify: verify,
    });
    return token;
  }
}
