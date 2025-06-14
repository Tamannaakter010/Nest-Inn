import { assets, experiences } from "../assets/assets";
import Title from "../Components/Title/Title";
import { Link } from "react-router-dom";

const Experience = () => {
  // Log experiences to debug image data
  console.log("Experiences:", experiences);

  return (
    <div className="container mx-auto p-2 md:p-4 mt-20">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <Title
          align="center"
          title="Unforgettable Experiences"
          subTitle="Discover unique adventures and activities tailored for you"
        />
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
          From thrilling adventures to cultural immersions, our curated experiences make your trip
          extraordinary.
        </p>
      </div>

      {/* Experiences Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {experiences.map((item) => (
          <div
            key={item._id}
            className="relative bg-cover bg-center rounded-lg shadow-md overflow-hidden h-64 group transform hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage: `url(${item.image})`, // Use the imported image directly as a URL
            }}
          >
            {/* Fallback if image fails to load */}
            {!item.image && (
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-white">
                No Image
              </div>
            )}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-4">
              <div>
                <p className="text-white text-lg font-bold">${item.price}</p>
              </div>
              <div className="text-white">
                <p className="text-xl font-semibold">{item.title}</p>
                <p className="text-sm">{item.description}</p>
                <Link to="/mybookings">
                  <button className="mt-2 flex items-center gap-1 text-sm text-white hover:bg-cyan-900 px-3 py-1 rounded-md transition-colors duration-200">
                    Book Now
                    <img src={assets.arrowIcon} alt="arrow-icon" className="w-3 h-3" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-gray-600 text-lg mb-4">Ready to explore more adventures?</p>
        <Link to="/mybookings">
          <button className="flex items-center gap-1 group text-blue-600 font-medium text-xl px-4 py-2 mx-auto">
            View All Experiences
            <img
              src={assets.arrowIcon}
              alt="arrow-icon"
              className="w-3 h-3 group-hover:translate-x-1 transition-all duration-300"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Experience;