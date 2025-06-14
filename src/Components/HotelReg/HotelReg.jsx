import { useState } from "react"; // Added useState for form handling
import { assets } from "../../assets/assets"; // Import assets

const HotelReg = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData); // Placeholder for submission logic
  };

  return (
    <div className="pt-20 px-6 bg-gray-50 min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row"
      >
        <img
          src={assets.regImage}
          alt="reg-image"
          className="w-full md:w-1/2 h-64 md:h-auto object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
        />
        <div className="p-6 md:p-8 flex-1">
          <div className="flex justify-between items-center mb-6">
            <p className="text-2xl font-semibold text-gray-900">Register Your Hotel</p>
            <img
              src={assets.closeIcon}
              alt="close-icon"
              className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity"
              onClick={() => console.log("Close clicked")} // Placeholder for close action
            />
          </div>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Hotel Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                placeholder="Enter hotel name"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                placeholder="Enter address"
              />
            </div>
            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                Contact
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                placeholder="Enter contact number"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
              >
                <option value="">Select a city</option>
                {["Dubai", "Singapore", "New York", "London"].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600 transition-colors"
            >
              Register Hotel
            </button>
          </div>
        </div>
      </form>
  </div>
  );
};

export default HotelReg;