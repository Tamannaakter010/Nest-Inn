import { Outlet } from "react-router-dom";
import Navigationbar from "../../Components/HotelOwner/Navicationbar"; 
import Sidebar from "../../Components/HotelOwner/Sidebar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigationbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;