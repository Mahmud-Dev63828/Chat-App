import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const GroupList = () => {
  const [arrayLength, setArrayLength] = useState(10);

  return (
    <div className="p-4 h-[50dvh] bg-white rounded-xl shadow-lg flex flex-col">
      {/* Search Bar */}
      <div className="mb-4">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-purple-500"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            placeholder="Search groups..."
            className="block w-full p-3 ps-10 text-sm text-purple-700 border border-purple-300 rounded-lg bg-purple-50 focus:ring-purple-500 focus:border-purple-500 outline-none"
          />
        </div>
      </div>

      {/* Group List Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold text-purple-700 relative">
          Group List
          <span className="absolute -right-5 -top-1 w-4 h-4 rounded-full bg-purple-500 text-white text-xs flex items-center justify-center">
            {arrayLength}
          </span>
        </h1>
        <BsThreeDotsVertical className="text-purple-600 text-xl cursor-pointer" />
      </div>

      {/* Group Items */}
      <div className="overflow-y-auto pr-1 custom-scrollbar flex-1">
        {[...new Array(arrayLength)].map((_, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 justify-between py-3 px-2 rounded-lg transition-all ${
              arrayLength - 1 !== index ? "border-b border-purple-200 mb-2" : ""
            } hover:bg-purple-50`}
          >
            {/* Avatar */}
            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-purple-300">
              <img
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/16004754/pexels-photo-16004754/free-photo-of-woman-and-letters.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Group Avatar"
              />
            </div>

            {/* Group Info */}
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-purple-800 text-[17px] truncate">
                Friends Reunion
              </h2>
              <p className="text-sm text-purple-500 truncate">
                Hi Friends, What's up
              </p>
            </div>

            {/* Join Button */}
            <button className="bg-purple-600 hover:bg-purple-700 transition-all px-5 py-1.5 text-white text-sm font-medium rounded-md">
              Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupList;
