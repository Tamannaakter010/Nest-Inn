import { Link } from "react-router-dom";
import { exclusiveOffers } from "../../assets/assets";
import Title from "../Title/Title";

const AllOffers = () => {
  return (
    <div className="container mx-auto p-2 md:p-4 mt-20">
      <Title
        align="center"
        title="All Exclusive Offers"
        subTitle="Explore our best deals and discounts"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="relative bg-cover bg-center rounded-lg shadow-md overflow-hidden h-64 transform hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url('${item.image}')` }}
          >
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-4">
              <div>
                <p className="text-white text-lg font-bold">{item.priceOff}% Off</p>
              </div>
              <div className="text-white">
                <p className="text-xl font-semibold">{item.title}</p>
                <p className="text-sm">{item.description}</p>
                <p className="text-xs mt-1">Expires: {item.expiryDate}</p>
                <Link to='/mybookings' className="mt-2 flex items-center gap-1 text-sm text-white bg-cyan-900 px-3 py-1 rounded-md hover:bg-cyan-800 transition-colors duration-200">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOffers;