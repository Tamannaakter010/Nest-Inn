import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import HotelReg from '../Components/HotelReg/HotelReg';

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

  return (
    <div className="w-full overflow-visible">
      {noHeaderFooter || <Navbar />}
      {/*{false && <HotelReg />}*/}
      
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;