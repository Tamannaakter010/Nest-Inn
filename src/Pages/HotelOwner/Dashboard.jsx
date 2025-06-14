import { assets, dashboardDummyData } from "../../assets/assets";

const Dashboard = () => {
  const { totalBookings, totalRevenue, bookings } = dashboardDummyData;
  const recentBookings = [...bookings]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  return (
    <div className="p-6 md:p-10 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen pb-24">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
          Dashboard Overview
        </h1>
        <p className="text-gray-600 mt-2">A quick snapshot of recent activity and performance</p>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Total Booking */}
        <div className="bg-white p-6 rounded-3xl shadow-xl border-l-4 border-orange-500 transition-all hover:scale-[1.02] duration-300">
          <div className="flex items-center gap-5">
            <img src={assets.totalBookingIcon} alt="booking icon" className="w-12 h-12" />
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Total Bookings</h2>
              <p className="text-4xl font-extrabold text-orange-600 mt-2">{totalBookings}</p>
            </div>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="bg-white p-6 rounded-3xl shadow-xl border-l-4 border-orange-500 transition-all hover:scale-[1.02] duration-300">
          <div className="flex items-center gap-5">
            <img src={assets.totalRevenueIcon} alt="revenue icon" className="w-12 h-12" />
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Total Revenue</h2>
              <p className="text-4xl font-extrabold text-orange-600 mt-2">${totalRevenue}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white p-6 rounded-3xl shadow-xl border-l-4 border-orange-500 mb-24">
        <h2 className="text-xl font-semibold text-gray-800 mb-5">Recent Bookings</h2>
        <div className="max-h-72 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-gray-200 pr-2">
          {recentBookings.length > 0 ? (
            recentBookings.map((booking) => (
              <div
                key={booking._id}
                className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200"
              >
                <div className="flex-1">
                  <p className="text-base font-medium text-gray-900">
                    🏨 {booking.hotel.name || "Unnamed Hotel"}
                  </p>
                  <p className="text-sm text-gray-600">
                    🛏️ Room Type: {booking.room.roomType || "Unknown"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-800">
                    ${booking.totalPrice || 0}
                  </p>
                  <p
                    className={`text-sm font-semibold ${
                      booking.isPaid ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {booking.isPaid ? "Paid" : "Unpaid"}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 text-center">No recent bookings found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;