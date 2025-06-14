import React, { useState } from 'react';
import { roomsDummyData, facilityIcons } from '../assets/assets.js';
import HotelCard from '../Components/HotelCard/HotelCard.jsx';





const Hotels = () => {
  const [selectedPopularAmenities, setSelectedPopularAmenities] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 500]);

  const uniqueAmenities = [...new Set(roomsDummyData.flatMap(room => room.amenities))];
  const popularAmenities = ['Wi-Fi', 'Pool', 'Breakfast Included'];

  const handlePopularAmenityChange = (amenity) => {
    setSelectedPopularAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((item) => item !== amenity) : [...prev, amenity]
    );
  };

  const handleAmenityChange = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((item) => item !== amenity) : [...prev, amenity]
    );
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) =>
      name === 'min'
        ? [Math.max(0, Number(value)), prev[1]]
        : [prev[0], Math.min(500, Number(value))]
    );
  };

  const filteredRooms = roomsDummyData.filter((room) => {
    const matchesPopularAmenities =
      selectedPopularAmenities.length === 0 ||
      selectedPopularAmenities.every((amenity) => room.amenities.includes(amenity));
    const matchesAmenities =
      selectedAmenities.length === 0 ||
      selectedAmenities.every((amenity) => room.amenities.includes(amenity));
    const matchesPrice =
      room.pricePerNight >= priceRange[0] && room.pricePerNight <= priceRange[1];
    return matchesPopularAmenities && matchesAmenities && matchesPrice;
  });

  return (
    <div className="container mx-auto mt-20 md:p-4">
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-6 animate-fadeIn">
        Available Hotels
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Hotel Cards */}
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room, index) => (
                <div key={room._id} className="border p-4 rounded shadow-sm">
                  <HotelCard room={room} index={index} />

                  {/* Availability */}
                  <p className="mt-2 text-sm text-gray-600">
                    {room.isAvailable ? 'Available' : 'Not Available'}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No rooms match your filters.</p>
            )}
          </div>
        </div>

        {/* Filter Section */}
        <div className="md:w-1/4 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Filters</h2>
          <div className="flex flex-col gap-4">
            <div className="border border-gray-200 p-4 rounded-lg bg-white">
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Popular Filters</h3>
                {popularAmenities.map((amenity) => (
                  <label key={amenity} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={selectedPopularAmenities.includes(amenity)}
                      onChange={() => handlePopularAmenityChange(amenity)}
                      className="h-4 w-4 text-blue-600"
                    />
                   
                    <span className="text-sm text-gray-600">{amenity}</span>
                  </label>
                ))}
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Price Range ($/night)</h3>
                <div className="flex gap-2">
                  <input
                    type="number"
                    name="min"
                    value={priceRange[0]}
                    onChange={handlePriceChange}
                    placeholder="Min"
                    className="w-full p-2 border rounded"
                    min="0"
                    max="500"
                  />
                  <span className="text-gray-600">-</span>
                  <input
                    type="number"
                    name="max"
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                    placeholder="Max"
                    className="w-full p-2 border rounded"
                    min="0"
                    max="500"
                  />
                </div>
              </div>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg bg-white">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Amenities</h3>
              {uniqueAmenities.map((amenity) => (
                <label key={amenity} className="flex items-center gap-2 mb-2">
                  <input
                    type="checkbox"
                    checked={selectedAmenities.includes(amenity)}
                    onChange={() => handleAmenityChange(amenity)}
                    className="h-4 w-4 text-blue-600"
                  />
                  <img src={facilityIcons[amenity] || ''} alt={amenity} className="w-5 h-5" />
                  <span className="text-sm text-gray-600">{amenity}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;