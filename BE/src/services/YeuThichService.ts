import { ObjectId } from "mongoose";
import yeuthichModel from "../models/YeuThichModel";

export class YeuThichSevice {
    async createYeuThich(body: any): Promise<void> {
      const data = body;
  
      const newYeuThich = new yeuthichModel({
        ma_phong: data.ma_phong,
        id_user: data.id_user,
      });
      await newYeuThich.save();
    }

    async deleteById(id_user: ObjectId): Promise<void> {
        const deleteYeuThich = await yeuthichModel.findOne({ id_user });
        if (!deleteYeuThich) {
          throw new Error("Không tìm thấy mục yêu thích của người dùng này");
        }
        await yeuthichModel.deleteOne({ id_user });
      }
}
const YeuThich = new YeuThichSevice();
export default YeuThich;