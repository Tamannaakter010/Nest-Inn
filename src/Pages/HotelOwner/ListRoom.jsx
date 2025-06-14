import React, { useState, useEffect } from "react";
import { roomsDummyData, userBookingsDummyData } from "../../assets/assets";

const ListRoom = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Combine rooms with booking data for user info and payment status
    const combinedRooms = roomsDummyData.map((room) => {
      const booking = userBookingsDummyData.find((b) => b.room._id === room._id);
      return {
        ...room,
        userName: booking?.user?.username || "N/A",
        totalAmount: booking?.totalPrice || room.pricePerNight,
        paymentStatus: booking?.isPaid ? "Paid" : "Unpaid",
      };
    });
    setRooms(combinedRooms);
  }, []);

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Room Listing</h1>
        <p className="text-gray-600">
          View, edit, or manage all listed rooms. Keep the info up-to-date to provide the best
          experience for users.
        </p>
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">All Rooms</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="p-3 text-left">User Name</th>
              <th className="p-3 text-left">Room Name</th>
              <th className="p-3 text-left">Total Amount</th>
              <th className="p-3 text-left">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr
                key={room._id}
                className="border-b hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="p-3 text-gray-700">{room.userName}</td>
                <td className="p-3 text-gray-700">{room.roomType}</td>
                <td className="p-3 text-gray-700">${room.totalAmount}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      room.paymentStatus === "Paid"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {room.paymentStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom;