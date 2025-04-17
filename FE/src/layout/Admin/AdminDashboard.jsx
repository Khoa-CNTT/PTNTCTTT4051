import PhongTroAdmin from "../../pages/admin/home/Quanly/PhongTroAdmin";

function AdminDashboard({ activeComponent }) {
  const renderComponent = () => {
    switch (activeComponent) {
      case "phongtro":
        return <PhongTroAdmin />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6 rounded-lg shadow-lg text-black">
      <div>{renderComponent()}</div>
    </div>
  );
}

export default AdminDashboard;
