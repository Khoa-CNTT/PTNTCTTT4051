import { Request, Response } from "express";
import { ImageService } from "../services/ImagePhongService";

const imageService = new ImageService();

const createImage = async (req: Request, res: Response) => {
  const { ma_phong, image_url } = req.body;
  try {
    await imageService.createImage({ ma_phong, image_url });

    res.status(200).json({
      message: "Hình ảnh đã được tạo thành công",
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const updateImage = async (req: Request, res: Response) => {
  const { ma_phong } = req.params;
  const body = req.body;
  try {
    await imageService.updateImage(ma_phong, body);

    res.status(200).json({
      message: "Hình ảnh đã được cập nhật thành công",
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export {
  createImage,
  updateImage
};
