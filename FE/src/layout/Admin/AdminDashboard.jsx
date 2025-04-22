import AccountAdmin from "../../pages/admin/home/Quanly/AccountAdmin";
import DanhMucAdmin from "../../pages/admin/home/Quanly/DanhMucAdmin";
import PhongTroAdmin from "../../pages/admin/home/Quanly/PhongTroAdmin";
import ThietBiAdmin from "../../pages/admin/home/Quanly/ThietBiAdmin";
import UserAdmin from "../../pages/admin/home/Quanly/UserAdmin/UserAdmin";

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
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6 rounded-lg shadow-lg text-black">
      <div>{renderComponent()}</div>
    </div>
  );
}

export default AdminDashboard;
