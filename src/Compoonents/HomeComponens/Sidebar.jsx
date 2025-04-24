import React from "react";
import { Link, useLocation } from "react-router";
import { FaRegBell, FaSignOutAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoCloudUploadOutline, IoHomeOutline } from "react-icons/io5";
import { TiMessage } from "react-icons/ti";

const Sidebar = () => {
  const location = useLocation();

  const navigationIcons = [
    { id: 1, path: "/", icon: <IoHomeOutline />, title: "Home" },
    { id: 2, path: "/message", icon: <TiMessage />, title: "Message" },
    {
      id: 3,
      path: "/notification",
      icon: <FaRegBell />,
      title: "Notification",
    },
    { id: 4, path: "/setting", icon: <FaGear />, title: "Settings" },
    { id: 5, path: "/logout", icon: <FaSignOutAlt />, title: "Logout" },
  ];

  return (
    <div className="w-[160px] bg-purple-600 py-3 h-[100dvh] flex flex-col items-center">
      {/* profile section */}
      <div className="flex flex-col items-center">
        <div className="w-[5vw] h-[70px] rounded-full relative cursor-pointer group">
          <picture>
            <img
              src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="profilePic"
              className="w-full h-full object-cover rounded-full"
            />
          </picture>
          <span className="absolute hidden group-hover:block top-1/2 left-1/3 -translate-y-1/2 text-white text-2xl">
            <IoCloudUploadOutline />
          </span>
        </div>
        <h1 className="text-white text-center text-xl mt-2">Mahmud Hasan</h1>
      </div>

      {/* navigation icons */}
      <div className="flex flex-col gap-y-6 items-start justify-center mt-10 w-full px-4">
        {navigationIcons.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              to={item.path}
              key={item.id}
              className={`flex  items-center gap-3 w-full pl-3 pr-33 py-2 rounded-l-full transition-all duration-300 ${
                isActive
                  ? "bg-white  text-purple-600 font-semibold shadow-lg"
                  : "text-white hover:bg-purple-500"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm">{item.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
