import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { facilityIcons, roomsDummyData, roomCommonData } from "../assets/assets";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const foundRoom = roomsDummyData.find((room) => room._id === id);
    if (foundRoom) {
      setRoom(foundRoom);
      setMainImage(foundRoom.images?.length > 0 ? foundRoom.images[0] : null);
    } else {
      setError("Room not found");
    }
    setLoading(false);
  }, [id]);

  const handleBookNow = () => {
    if (!checkInDate || !checkOutDate || guests < 1) {
      alert("Please select check-in date, check-out date, and number of guests.");
      return;
    }
    if (new Date(checkOutDate) <= new Date(checkInDate)) {
      alert("Check-out date must be after check-in date.");
      return;
    }
    navigate(`/book/${id}`, {
      state: { checkInDate, checkOutDate, guests },
    });
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-lg">
        {error}
      </div>
    );
  if (!room)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        No room data available
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Room Details
        </h1>
        <p className="text-lg sm:text-xl font-semibold text-orange-600 mt-2">
          30% Off
        </p>
      </div>

      {/* Hotel Info */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-4">
          {room.hotel?.name || "Unnamed Hotel"}
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400 text-lg" />
            <span className="text-gray-600">
              {room.hotel?.rating || "4.5"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={FaLocationDot} className="text-red-500 text-lg" />
            <span className="text-gray-600">
              {room.hotel?.address || "Unknown Location"}
            </span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium text-gray-700 mb-2">
            Price: ${room.pricePerNight || "N/A"}/Night
          </p>
          <p
            className={`text-lg font-medium ${
              room.isAvailable ? "text-green-600" : "text-red-600"
            }`}
          >
            Availability: {room.isAvailable ? "Available" : "Not Available"}
          </p>
        </div>
      </div>

      {/* Main Image */}
      {mainImage && (
        <div className="max-w-4xl mx-auto mb-8">
          <img
            src={mainImage}
            alt={room.hotel?.name || "Room image"}
            className="w-full h-64 sm:h-96 object-cover rounded-xl shadow-md"
          />
        </div>
      )}

      {/* Thumbnail Images */}
      {room?.images && room.images.length > 1 && (
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {room.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1} for ${room.hotel?.name}`}
              className="w-full h-24 sm:h-32 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity duration-200"
              onClick={() => setMainImage(image)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setMainImage(image)}
            />
          ))}
        </div>
      )}

      {/* Amenities Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
          Experience Luxury Like Never Before
        </h2>
        <div className="flex flex-wrap gap-3">
          {room.amenities?.map((item, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors duration-200"
              title={`Includes ${item}`}
            >
              {facilityIcons[item] ? (
                <img
                  src={facilityIcons[item]}
                  alt={`${item} icon`}
                  className="w-5 h-5"
                />
              ) : (
                <span className="w-5 h-5" />
              )}
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Booking Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-6">
          Book Your Stay
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label
              htmlFor="checkIn"
              className="block text-gray-700 font-medium mb-2"
            >
              Check-In Date
            </label>
            <input
              id="checkIn"
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 transition-shadow duration-200"
              required
            />
          </div>
          <div>
            <label
              htmlFor="checkOut"
              className="block text-gray-700 font-medium mb-2"
            >
              Check-Out Date
            </label>
            <input
              id="checkOut"
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              min={checkInDate || new Date().toISOString().split("T")[0]}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 transition-shadow duration-200"
              required
            />
          </div>
          <div>
            <label
              htmlFor="guests"
              className="block text-gray-700 font-medium mb-2"
            >
              Guests
            </label>
            <input
              id="guests"
              type="number"
              value={guests}
              onChange={(e) =>
                setGuests(Math.max(1, parseInt(e.target.value) || 1))
              }
              min="1"
              max="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 transition-shadow duration-200"
              required
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleBookNow}
            disabled={!room.isAvailable}
            className={`w-full sm:w-64 py-3 rounded-lg text-white font-semibold transition-colors duration-200 ${
              room.isAvailable
                ? "bg-orange-600 hover:bg-orange-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {room.isAvailable ? "Book Now" : "Unavailable"}
          </button>
        </div>
      </div>

      {/* Common Specification Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-6">
          Room Specifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {roomCommonData.map((spec, index) => (
            <div key={index} className="flex items-start gap-4">
              <img
                src={spec.icon}
                alt={`${spec.title} icon`}
                className="w-10 h-10"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {spec.title}
                </h3>
                <p className="text-gray-600 text-sm">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
          Additional Information
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Guests will be allocated on the ground floor for easy access and
          convenience. Our rooms are thoughtfully designed to ensure maximum
          comfort, featuring modern amenities and a welcoming ambiance. Upon
          booking, guests will receive a confirmation email with all relevant
          details. Early check-in and late check-out options may be available
          upon request, subject to availability. Complimentary breakfast is
          included with every stay, and our friendly staff is available 24/7 to
          assist you with any needs. Experience a seamless and memorable stay
          with us!
        </p>
      </div>

      {/* Hosted by Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-4 mb-4 sm:mb-0">
          <img
            src={room.hotel?.owner?.image || "/default-avatar.png"}
            alt="Host"
            className="h-16 w-16 rounded-full object-cover"
          />
          <div>
            <p className="text-gray-800 font-semibold text-lg">
              Hosted by {room.hotel?.name || "Unknown Host"}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <FaStar className="text-yellow-400 text-lg" />
              <span className="text-gray-600">200+ reviews</span>
            </div>
          </div>
        </div>
        <button
          className="py-2 px-6 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
          onClick={() => alert("Contacting host...")}
        >
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;