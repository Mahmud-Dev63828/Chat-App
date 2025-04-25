import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const UserList = () => {
  const [arrayLength, setArrayLength] = useState(10);

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg h-[50dvh] flex flex-col">
      {/* Group List Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold text-purple-700 relative">
          User List
          <span className="absolute -right-5 -top-1 w-4 h-4 rounded-full bg-purple-500  text-white text-xs flex items-center justify-center">
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
            <div className=" w-12 h-12">
              <img
                className="w-full h-full object-cover rounded-full ring-2 ring-purple-300"
                src="https://images.pexels.com/photos/16004754/pexels-photo-16004754/free-photo-of-woman-and-letters.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Group Avatar"
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-purple-800 text-[17px] truncate">
                Mahmudul Hasan
              </h2>
              <p className="text-sm text-purple-500 truncate">
                mahmudul.hasan63828@gmail.com
              </p>
            </div>

            {/* Button */}
            <button className="bg-purple-600 hover:bg-purple-700 transition-all px-2 py-1.5 text-white text-sm font-medium rounded-md">
              Add Friend
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
