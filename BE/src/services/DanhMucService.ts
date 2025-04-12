import DanhMucModel from '../models/DanhMucModel';
import { ObjectId } from 'mongodb';

export class DanhMucService {
    // Tạo mới một danh mục
    async createDanhMuc(body: any): Promise<void> {
        const { ma_danh_muc,ten_danh_muc, trang_thai, mo_ta } = body;

        // Kiểm tra danh mục đã tồn tại chưa
        const existingDanhMuc = await DanhMucModel.findOne({ ten_danh_muc });
        if (existingDanhMuc) {
            throw new Error('Danh mục đã tồn tại');
        }

        // Tạo mới danh mục
        const newDanhMuc = new DanhMucModel({
            ma_danh_muc,
            ten_danh_muc,
            trang_thai,
            mo_ta,
        });

        // Lưu danh mục vào cơ sở dữ liệu
        await newDanhMuc.save();
    }

}
