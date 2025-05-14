import AccountAdmin from "../../pages/admin/home/Quanly/AccountAdmin";
import DanhMucAdmin from "../../pages/admin/home/Quanly/DanhMucAdmin";
import PhongTroAdmin from "../../pages/admin/home/Quanly/PhongTroAdmin";
import ThietBiAdmin from "../../pages/admin/home/Quanly/ThietBiAdmin";
import UserAdmin from "../../pages/admin/home/Quanly/UserAdmin/UserAdmin";
import YeuThichAdmin from "../../pages/admin/home/Quanly/YeuThichAdmin";
import MapAdmin from "../../pages/admin/home/Quanly/Map";
import HoadonCocAdmin from "../../pages/admin/home/Quanly/HoadonCocAdmin";
import HopDongAdmin from "../../pages/admin/home/Quanly/HopDongAdmin";
import AnhPhongAdmin from "../../pages/admin/home/Quanly/AnhPhongAdmin";
import DichvuAdmin from "../../pages/admin/home/Quanly/dichvuAdmin";
import ThongKeYeuThich from "../../pages/admin/home/Chart/thongKeYeuthich";
import ChartAdmin from "../../pages/admin/home/Chart/thongKeDienNang";
import ThongKeDanhGia from "../../pages/admin/home/Chart/thongKeDanhGia";
function AdminDashboard({ activeComponent }) {
  const renderComponent = () => {
    switch (activeComponent) {
      case "phongtro":
        return <PhongTroAdmin />;
      case "admin":
        return <AccountAdmin />;
      case "adminuser":
        return <UserAdmin />;
      case "danhmuc":
        return <DanhMucAdmin />;
      case "thietbi":
        return <ThietBiAdmin />;
      case "anhphong":
        return <AnhPhongAdmin />;
      case "yeuthich":
        return <YeuThichAdmin />;
      case "hoadoncoc":
        return <HoadonCocAdmin />;
      case "dichvu":
        return <DichvuAdmin />;
      case "hopdong":
        return <HopDongAdmin />;
      case "suachua":
        return <SuachuaAdmin />;
      case "map":
        return <MapAdmin />;
      case "thongkeYeuthich":
        return <ThongKeYeuThich />;
      case "thongkeDien":
        return <ChartAdmin />;
      case "thongkeDanhgia":
        return <ThongKeDanhGia />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6 rounded-lg shadow-lg text-black">
      <div>{renderComponent()}</div>
    </div>
  );
}

export default AdminDashboard;
