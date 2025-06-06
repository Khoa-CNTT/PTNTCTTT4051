import { useEffect, useState } from "react";

function CitySelector({ onSelectCity }) {
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    if (danhMuc.length > 0) {
      setSelectedCity(danhMuc[0].ma_danh_muc);
      onSelectCity(danhMuc[0].ma_danh_muc);
    }
  }, [danhMuc, onSelectCity]);

  const handleChange = (e) => {
    const selectedCityId = e.target.value;
    setSelectedCity(selectedCityId);

    const selectedCityData = danhMuc.find(
      (city) => city.ma_danh_muc === selectedCityId
    );
    if (selectedCityData) {
      onSelectCity(selectedCityData.ma_danh_muc);
    }
  };

  return (
    <div>
      <select
        className="px-5 py-3 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 appearance-none bg-white"
        value={selectedCity}
        onChange={handleChange}
      >
        <option value="" disabled>
          Chọn thành phố
        </option>
        {danhMuc.map((city) => (
          <option key={city.ma_danh_muc} value={city.ma_danh_muc}>
            {city.ten_danh_muc}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CitySelector;
