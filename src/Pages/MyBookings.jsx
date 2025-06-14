import { useState, useEffect } from "react";
import Title from "../Components/Title/Title";
import { assets, userBookingsDummyData } from "../assets/assets";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    try {
      // Load bookings from userBookingsDummyData
      setBookings(userBookingsDummyData || []);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) return <div className="pt-40 px-4 text-center text-lg font-semibold text-gray-600">Loading...</div>;
  if (error) return <div className="pt-40 px-4 text-center text-red-600 font-semibold">{error}</div>;

  return (
    <div className="pt-20 px-6 bg-gray-50 min-h-screen">
      <Title
        title="My Bookings"
        subTitle="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks—track bookings, view stay details, and enjoy hassle-free travel planning at your fingertips."
        align="left"
        className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500 mb-20"
      />
      <div className="max-w-6xl mt-6 mx-auto w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b-2 border-gray-200 font-semibold text-lg py-4 px-6 bg-gradient-to-r from-gray-100 to-white text-gray-800">
          <div>Hotels</div>
          <div>Date and Timing</div>
          <div>Payments</div>
        </div>
        {bookings.length === 0 ? (
          <p className="text-center text-gray-600 mt-6 text-xl italic">No bookings found.</p>
        ) : (
          bookings.map((booking) => (
            <div
              key={booking._id}
              className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] gap-y-4 md:gap-0 border-b border-gray-200 py-6 px-6 hover:bg-gray-50 transition-all duration-300 ease-in-out items-center hover:shadow-sm"
            >
              {/* Hotels */}
              <div className="flex flex-col gap-3 text-gray-800">
                <div className="flex items-start md:items-center gap-4">
                  <img
                    src={booking.room.images?.[0] || "/default-hotel.jpg"}
                    alt="hotel-img"
                    className="w-28 h-28 object-cover rounded-xl border-2 border-gray-200"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-lg text-gray-900">{booking.hotel?.name || "Unnamed Hotel"}</p>
                    <span className="text-sm text-gray-500">{booking.room.roomType || "Unknown Type"}</span>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <img src={assets.locationIcon} alt="location-icon" className="w-4 h-4" />
                      <span>{booking.hotel.address || "No address"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <img src={assets.guestsIcon} alt="guests-icon" className="w-4 h-4" />
                      <span>Guests: {booking.guests || 0}</span>
                    </div>
                    <div className="text-sm text-gray-700 font-semibold mt-1">
                      Total: <span className="text-orange-600">${booking.totalPrice || 0}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Date and Timing */}
              <div className="text-gray-700 font-medium text-sm md:text-base text-left md:text-center">
                {new Date(booking.checkInDate).toLocaleDateString()} – {new Date(booking.checkOutDate).toLocaleDateString()}
              </div>
              {/* Payments */}
              <div className="text-left md:text-center">
                {booking.isPaid ? (
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 inline-block"
                  >
                    Paid
                  </span>
                ) : (
                  <div className="flex flex-col items-start md:items-center gap-2">
                    <span
                      className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 inline-block"
                    >
                      Pending
                    </span>
                    <button
                      className="px-3 py-1 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
                    >
                      Pay Now
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyBookings;