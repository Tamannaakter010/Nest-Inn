import { assets, exclusiveOffers } from "../../assets/assets";
import Title from "../Title/Title";

const ExclusiveOffers = () => {
  return (
    <div className="relative container mx-auto p-2 md:p-4">
      <div className="flex text-center justify-between mb-6">
        <Title align="" title="Exclusive Offers" subTitle="Take advantage of our exclusive offers" />
       <button className="flex items-center gap-1 group text-blue-600 font-medium text-xl px-2 py-1">
  View All Offers
  <img
    src={assets.arrowIcon}
    alt="arrow-icon"
    className="w-3 h-3 group-hover:translate-x-1 transition-all duration-300"
  />
</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="relative bg-cover bg-center rounded-lg shadow-md overflow-hidden h-64 group transform hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url('${item.image}')` }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-4">
              <div>
                <p className="text-white text-lg font-bold">{item.priceOff}% Off</p>
              </div>
              <div className="text-white">
                <p className="text-xl font-semibold">{item.title}</p>
                <p className="text-sm">{item.description}</p>
                <p className="text-xs mt-1">Expires: {item.expiryDate}</p>
                <button className="mt-2 flex items-center gap-1 text-sm text-white hover:bg-cyan-900 px-3 py-1 rounded-md transition-colors duration-200">
                  View Offer
                  <img src={assets.arrowIcon} alt="arrow-icon" className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;