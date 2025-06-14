import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets'; // Adjust path as needed

const HotelCard = ({ room, index }) => {
  const imageSrc = room.images && room.images.length > 0 ? room.images[0] : '/placeholder-image.jpg';

  return (
    <div className="overflow-hidden rounded-xl shadow-lg bg-white transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link
        to={`/room/${room._id}`} // CHANGE: Updated from '/rooms/:id' to '/room/:id' to match router configuration
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        key={room._id}
        className="block"
      >
        <div className="relative">
          <img
            src={imageSrc}
            alt={room.hotel?.name || 'Hotel image'}
            className="w-full h-40 sm:h-48 md:h-56 lg:h-72 object-cover transition-transform duration-300 hover:scale-105"
          />
          {index % 2 === 0 && (
            <p className="absolute top-3 left-3 bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              Best Seller
            </p>
          )}
        </div>
        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between mb-2">
            <p className="font-playfair text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 truncate">
              {room.hotel?.name || 'Unnamed Hotel'}
            </p>
            <div className="flex items-center gap-1">
              <img
                src={assets.starIconFilled}
                alt="star-icon"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <span className="text-gray-700 font-medium">4.5</span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <img
                src={assets.locationIcon}
                alt="location-icon"
                className="w-4 h-4"
              />
              <span className="truncate">{room.hotel?.address || 'Unknown Location'}</span>
            </div>
            <div className="text-sm font-medium text-gray-700">
              ${room.pricePerNight || 'N/A'}/Night
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HotelCard;