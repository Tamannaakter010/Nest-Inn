import { NavLink } from "react-router-dom";
import { assets } from "/src/assets/assets.js"; // Changed to named import

const Sidebar = () => {
  const sidebarLinks = [
    { name: "Dashboard", path: "/owner", icon: assets.dashboardIcon },
    { name: "Add Room", path: "/owner/add-room", icon: assets.addIcon },
    { name: "List Room", path: "/owner/list-room", icon: assets.listIcon },
  ];

  return (
    <div className="md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
      {sidebarLinks.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={({ isActive }) =>
            `flex items-center p-4 hover:bg-gray-100 ${
              isActive ? "bg-gray-100 text-blue-600" : "text-gray-600"
            }`
          }
        >
          <img src={item.icon} alt={`${item.name} icon`} className="w-6 h-6 mr-2" />
          <span className="hidden md:block">{item.name}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;