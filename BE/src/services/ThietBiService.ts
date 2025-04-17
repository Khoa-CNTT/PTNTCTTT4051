import ThietBiModel from "../models/ThietBiModel";
import { ObjectId } from "mongodb";
export class ThietBiService {
    // Tạo mới một thiết bị
    async createThietBi(body: any): Promise<void> {
        const {ma_phong, ten_thiet_bi, so_luong_thiet_bi, trang_thai } = body;

        // Tạo mới thiết bị
        const newThietBi = new ThietBiModel({
            ma_phong,
            ten_thiet_bi,
            so_luong_thiet_bi,
            trang_thai
        });

        await newThietBi.save();
    }

    // Cập nhật thông tin thiết bị
    async updateThietBi(_id: any, data: any): Promise<void> {
        const id = new ObjectId(_id)
        const {ma_phong,ten_thiet_bi, so_luong_thiet_bi, trang_thai } = data;

        // Kiểm tra thiết bị cần cập nhật có tồn tại không
        const thietBi = await ThietBiModel.findById(id);
        if (!thietBi) {
            throw new Error('Thiết bị không tồn tại');
        }

        // // Cập nhật thông tin thiết bị
        thietBi.ma_phong = ma_phong ?? thietBi.ma_phong;
        thietBi.ten_thiet_bi = ten_thiet_bi ?? thietBi.ten_thiet_bi;
        thietBi.so_luong_thiet_bi = so_luong_thiet_bi ?? thietBi.so_luong_thiet_bi;
        thietBi.trang_thai = trang_thai ?? thietBi.trang_thai;

        // Lưu các thay đổi vào cơ sở dữ liệu
        await thietBi.save();
    }


    //Lấy danh sách dữu liệu thiết bị
    async getDataThietBi(): Promise<any[]> {
        // Sử dụng `find()` để lấy tất cả dữ liệu thiết bị
        const thietBi = await ThietBiModel.find();

        // Trả về kết quả
        return thietBi;
    }

    async deleteAllThietBi() {
       return await ThietBiModel.deleteMany();
    }

    async deleteByIdaThietBi(body:any): Promise<void> {
        const { id } = body;
        const thietBi = await ThietBiModel.findById(id);
        if (!thietBi) {
            throw new Error('Thiết bị không tồn tại');
        }

        // Xóa thiết bị
        await ThietBiModel.findByIdAndDelete(id);
    }
}
