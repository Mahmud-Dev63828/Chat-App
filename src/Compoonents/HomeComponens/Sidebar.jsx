import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { TiMessage } from "react-icons/ti";
import { FaRegBell } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";

const Sidebar = () => {
  const location = useLocation();

  const navigationItems = [
    { id: 1, path: "/", icon: <IoHomeOutline />, title: "Home" },
    { id: 2, path: "/message", icon: <TiMessage />, title: "Message" },
    {
      id: 3,
      path: "/notification",
      icon: <FaRegBell />,
      title: "Notification",
    },
    { id: 4, path: "/setting", icon: <FaGear />, title: "Settings" },
  ];

  return (
    <div className="w-[220px]  img flex flex-col justify-between text-white w h-screen bg-[url('https://i.pinimg.com/736x/7f/14/68/7f14683bd5b8ba8a169c38a16bad12c9.jpg')] bg-cover bg-center rounded-tr-[90px] overflow-hidden">
      <div className="px-6 pt-6">
        {/* Logo */}
        <h1 className="text-xl font-bold mb-8 text-purple-500">
          Msg<span className="text-xl font-bold mb-8 text-white">X</span>
        </h1>

        {/* Profile section */}
        <div className="flex flex-col items-center text-center">
          <div className="w-[80px] h-[80px] rounded-full bg-white mb-3 overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="profile"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <h2 className="text-base font-semibold">Mahmud Hasan</h2>
          <p className="text-xs text-gray-300">26 y/o</p>
          <div className="bg-blue-600 px-3 py-1 text-xs rounded-full mt-2">
            #3479280
          </div>
        </div>

        {/* Navigation section */}
        <nav className="mt-10 flex flex-col gap-2">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                to={item.path}
                key={item.id}
                className={`flex items-center gap-3 py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium ${
                  isActive
                    ? "bg-white bg-opacity-20"
                    : "hover:bg-white hover:text-black hover:bg-opacity-10"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <div className="p-6">
        <Link
          to="/logout"
          className="flex items-center gap-3 text-sm text-white hover:text-red-400"
        >
          <TbLogout2 /> <span>Log out</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
