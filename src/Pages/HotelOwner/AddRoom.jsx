import React, { useState } from 'react';
import { facilityIcons, hotelDummyData } from "../../assets/assets";

const AddRoom = () => {
  const [inputs, setInputs] = useState({
    hotel: hotelDummyData._id,
    roomType: '',
    pricePerNight: '',
    amenities: {
      'Free WiFi': false,
      'Free Breakfast': false,
      'Room Service': false,
      'Mountain View': false,
      'Pool Access': false,
    },
    images: [null, null, null, null],
    isAvailable: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAmenityChange = (e) => {
    const { name, checked } = e.target;
    setInputs((prev) => ({
      ...prev,
      amenities: {
        ...prev.amenities,
        [name]: checked,
      },
    }));
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setInputs((prev) => ({
        ...prev,
        images: prev.images.map((img, i) => (i === index ? imageUrl : img)),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedAmenities = Object.keys(inputs.amenities).filter(
      (key) => inputs.amenities[key]
    );
    const formData = {
      ...inputs,
      amenities: selectedAmenities,
    };
    console.log('Form Data:', formData);
    // TODO: Add API call
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Add a New Room</h1>
      <h3 className="text-lg text-gray-600 mb-6">
        Add a room to {hotelDummyData.name}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Room Type</label>
          <input
            type="text"
            name="roomType"
            value={inputs.roomType}
            onChange={handleInputChange}
            placeholder="e.g., Double Bed"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Price Per Night ($)</label>
          <input
            type="number"
            name="pricePerNight"
            value={inputs.pricePerNight}
            onChange={handleInputChange}
            placeholder="e.g., 199"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
            min="0"
          />
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700">Amenities</h4>
          <div className="mt-2 space-y-2">
            {Object.keys(inputs.amenities).map((amenity) => (
              <div key={amenity} className="flex items-center">
                <input
                  type="checkbox"
                  name={amenity}
                  checked={inputs.amenities[amenity]}
                  onChange={handleAmenityChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <img
                  src={facilityIcons[amenity]}
                  alt={`${amenity} icon`}
                  className="w-5 h-5 mx-2"
                />
                <label className="text-sm text-gray-600">{amenity}</label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700">Upload Images (up to 4)</h4>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {inputs.images.map((image, index) => (
              <div key={index} className="relative">
                <label className="block text-sm text-gray-600">Image {index + 1}</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, index)}
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                <div className="mt-2 w-32 h-32 bg-gray-100 rounded-md flex items-center justify-center">
                  {image ? (
                    <img
                      src={image}
                      alt={`Room Image ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                  ) : (
                    <img
                      //src={uploadArea}
                      alt="Upload placeholder"
                      className="w-8 h-8"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Availability</label>
          <select
            name="isAvailable"
            value={inputs.isAvailable}
            onChange={(e) =>
              setInputs((prev) => ({
                ...prev,
                isAvailable: e.target.value === 'true',
              }))
            }
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          >
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>
        </div>

        <button
          type="submit"
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
       
          Add Room
        </button>
      </form>
    </div>
  );
};

export default AddRoom;