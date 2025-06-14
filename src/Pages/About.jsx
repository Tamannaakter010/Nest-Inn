import { assets } from "../assets/assets";
import Title from "../Components/Title/Title";

const About = () => {
  return (
    <div className="container mx-auto p-2 md:p-4 mt-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <Title
          align="center"
          title="About Us"
          subTitle="Discover the story behind our journey"
        />
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
          Welcome to Nest Inn, your trusted partner in creating unforgettable travel experiences. We
          are dedicated to providing exceptional hospitality and personalized services to make every
          trip memorable.
        </p>
      </div>

      {/* About Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Mission Section */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <img
            src={assets.homeIcon}
            alt="Mission Icon"
            className="w-12 h-12 mb-4 mx-auto"
          />
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">Our Mission</h2>
          <p className="text-gray-600 text-center">
            At Nest Inn, our mission is to connect travelers with unique accommodations and
            experiences worldwide. We strive to deliver comfort, safety, and joy with every stay.
          </p>
        </div>

        {/* Vision Section */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <img
            src={assets.heartIcon}
            alt="Vision Icon"
            className="w-12 h-12 mb-4 mx-auto"
          />
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">Our Vision</h2>
          <p className="text-gray-600 text-center">
            We envision a world where every journey is enhanced by exceptional hospitality, setting
            new standards in the travel industry with innovation and care.
          </p>
        </div>
      </div>

      {/* Team or Values Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our team consists of passionate travel enthusiasts and hospitality experts dedicated to
          curating the best experiences for you. With years of industry experience, we ensure every
          detail is perfect.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <img
            src={assets.userIcon}
            alt="Team Member 1"
            className="w-20 h-20 rounded-full object-cover"
          />
          <img
            src={assets.userIcon}
            alt="Team Member 2"
            className="w-20 h-20 rounded-full object-cover"
          />
          <img
            src={assets.userIcon}
            alt="Team Member 3"
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mb-12">
        <p className="text-gray-600 text-lg mb-4">
          Ready to start your journey with us?
        </p>
        <a href="/mybookings" className="inline-flex items-center gap-1 group text-blue-600 font-medium text-xl px-4 py-2">
          Join Now
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="w-3 h-3 group-hover:translate-x-1 transition-all duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default About;