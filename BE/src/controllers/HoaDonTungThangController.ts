import { Request, Response } from 'express';
import HoaDonThangService from '../services/HoaDonTungThangService';

const hoaDonThangService = new HoaDonThangService();

export const taoHoaDon = async (req: Request, res: Response) => {
  try {
    const { ma_phong, id_users, thang } = req.body;

    // Kiểm tra dữ liệu đầu vào
    if (!ma_phong || !id_users || !thang) {
      return res.status(400).json({ message: 'Thiếu thông tin: ma_phong, id_users, thang là bắt buộc' });
    }
    if (!/^\d{4}-\d{2}$/.test(thang)) {
      return res.status(400).json({ message: 'Định dạng tháng không hợp lệ (YYYY-MM)' });
    }

    const hoaDon = await hoaDonThangService.taoHoaDon(ma_phong, id_users, thang);
    return res.status(201).json({
      message: 'Tạo hóa đơn tháng thành công',
      data: hoaDon,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
    console.error('Lỗi không xác định:', error);
    return res.status(500).json({ message: 'Lỗi server nội bộ' });
  }
}

export const getHoaDon = async (req: any, res: any) => {

  try {
    const data = await hoaDonThangService.getDataHoaDon();

    res.status(200).json({
      status: "200",
      data: data,
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
    });
  }
}

export const getHoaDonUser = async (req: Request, res: Response) => {
  try {
    const { id_user } = req.params;
    const data = await hoaDonThangService.getUserHoaDon(id_user);

    if (!data || data.length === 0) {
      return res.status(404).json({
        status: "404",
        message: "No invoices found for this user",
      });
    }

    res.status(200).json({
      status: "200",
      data: data,
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const updateHoaDon = async (req: any, res: any) => {
  try {
    const _id = req.params;
    const data = req.body;

    await hoaDonThangService.updateData(_id, data);

    res.status(200).json({
      message: "Hóa đơn đã được cập nhật thành công",
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const deleteHoaDonByID = async (req: any, res: any) => {
  const { id } = req.params;
  try {

    await hoaDonThangService.deleteByIdHoaDon({ id });

    res.status(200).json({
      status: "200",
      message: "Đã xóa thành công!",
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
    });
  }
};
