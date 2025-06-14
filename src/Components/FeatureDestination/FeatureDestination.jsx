import { useNavigate } from 'react-router-dom';
import { roomsDummyData } from '../../assets/assets.js';
import HotelCard from '../HotelCard/HotelCard.jsx';
import Title from '../Title/Title.jsx';

const FeatureDestination = () => {
  const navigate = useNavigate();

  

  return (
    <section className="container mt-10 p-2 mx-auto md:p-4">
      <Title
        title="Feature Destination"
        subTitle="Discover our handpicked stays"
        align="text-center"
        font="font-playfair"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {roomsDummyData?.length > 0 ? (
          roomsDummyData.slice(0, 4).map((room, index) => (
            <HotelCard key={room._id} room={room} index={index} />
          ))
        ) : (
          <p className="text-center text-gray-500">No featured destinations available.</p>
        )}
      </div>

   <div className="flex justify-center mt-6">
  <button
    onClick={() => { navigate('/rooms'); scrollTo(0, 0); }}
    className="bg-gray-500 text-white text-sm px-1.5 py-1 rounded hover:bg-cyan-900 transition"
  >
    View All Destinations ...
  </button>
</div>
    </section>
  );
};

export default FeatureDestination;
