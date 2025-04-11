import YeuThich, { YeuThichSevice } from "../services/YeuThichService";

const yeuThichService = new YeuThichSevice();

export const createYeuThich = async (req: any, res: any) => {
  const data = req.body;
  await YeuThich.createYeuThich(data);
  res.status(200).json({
    message: "Đã thêm vào yêu thích!!",
  });
};

export const deleteYeuThich = async (req: any, res: any) => {
  try {
    const { id_user } = req.params;
    await yeuThichService.deleteById(id_user);
    res.status(200).json({
      message: "Đã hủy bỏ yêu thích!!",
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message || "Có lỗi xảy ra khi xóa mục yêu thích",
    });
  }
};