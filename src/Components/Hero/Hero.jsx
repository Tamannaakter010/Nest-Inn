import { FaCalendar, FaSearch } from 'react-icons/fa';
import { cities } from '../../assets/assets';
import { heroImagee } from '../../assets/assets';

const Hero = () => {
  return (
    <div
      className="relative flex flex-col items-start px-6 md:px-12 lg:px-24 xl:px-32 text-white h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImagee})` }}
    >
      <div className="pt-10  flex-grow flex flex-col justify-center">
        <p className="text-xl  font-bold md:text-xl max-md:text-sm mb-2">
          Explore Hotel Nest Inn
        </p>
        <h1 className="text-lg md:text-lg lg:text-xl max-md:text-lg leading-snug max-w-lg">
          Where creativity meets culture — discover the newly renovated space blending arts, entertainment, and lifestyle
        </h1>
      </div>

      {/* Form positioned half in, half out */}
 import { FaSearch } from 'react-icons/fa'; // Import search icon

<form
  className="absolute bottom-0 left-0 right-0 mx-6 md:mx-12 lg:mx-24 xl:mx-32 translate-y-1/2 bg-gradient-to-br from-blue-100 to-gray-900 text-white rounded-lg px-4 py-3 flex flex-col md:flex-row max-md:items-start gap-2 max-md:mx-auto max-md:max-w-full max-md:px-2"
>
  <div className="flex-1 min-w-0 max-md:w-full">
    <div className="flex items-center gap-2">
      <FaSearch className="text-sm" />
      <label htmlFor="destinationInput" className="text-xs md:text-sm">
        Destination
      </label>
    </div>
    <input
      list="destinations"
      id="destinationInput"
      name="destination"
      type="text"
      className="w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-xs md:text-sm outline-none"
      placeholder="Type here"
      required
    />
    <datalist id="destinations">
      {cities.map((city, index) => (
        <option value={city} key={index}>{city}</option>
      ))}
    </datalist>
  </div>

  <div className="flex-1 min-w-0 max-md:w-full">
    <div className="flex items-center gap-2">
      <FaSearch className="text-sm" />
      <label htmlFor="checkIn" className="text-xs md:text-sm">Check in</label>
    </div>
    <input
      id="checkIn"
      name="checkIn"
      type="date"
      className="w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-xs md:text-sm outline-none"
    />
  </div>

  <div className="flex-1 min-w-0 max-md:w-full">
    <div className="flex items-center gap-2">
      <FaSearch className="text-sm" />
      <label htmlFor="checkOut" className="text-xs md:text-sm">Check out</label>
    </div>
    <input
      id="checkOut"
      name="checkOut"
      type="date"
      className="w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-xs md:text-sm outline-none"
    />
  </div>

  <div className="flex md:flex-col max-md:gap-2 max-md:items-center max-md:w-full">
    <label htmlFor="guests" className="text-xs md:text-sm">Guests</label>
    <input
      min={1}
      max={4}
      id="guests"
      name="guests"
      type="number"
      className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-xs md:text-sm outline-none max-w-20 max-md:max-w-16"
      placeholder="0"
    />
  </div>

  <button
    className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1 max-md:px-2"
  >
    <FaSearch className="text-sm" />
    <span className="text-xs md:text-sm">Search</span>
  </button>
</form>
    </div>
  );
};

export default Hero;