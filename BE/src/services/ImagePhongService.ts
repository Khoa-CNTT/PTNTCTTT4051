import HinhAnhPhongModel from "../models/HinhAnhPhongModel";

export class ImageService {
  // Tạo mới hình ảnh
  async createImage(body: any): Promise<void> {
    const { ma_phong, image_url } = body;

    const luuAnh = image_url.map((url: string) => {
      const newImage = new HinhAnhPhongModel({
        ma_phong,
        image_url: url,
      });
      return newImage.save();
    });
    // Chờ tất cả các ảnh được lưu
    await Promise.all(luuAnh);
  }

  // Cập nhật thông tin hình ảnh
  async updateImage(ma_phong: string, body: any) {
    return await HinhAnhPhongModel.findOneAndUpdate({ ma_phong }, body, {
      new: true,
    });
  }
}
