import React from "react";
import Sidebar from "../../Compoonents/HomeComponens/Sidebar";
import GroupList from "../../Compoonents/HomeComponens/GroupList";
import Friends from "../../Compoonents/HomeComponens/Friends";
import FriendRequest from "../../Compoonents/HomeComponens/FriendRequest";
import UserLIst from "../../Compoonents/HomeComponens/UserList";
import Group from "../../Compoonents/HomeComponens/Group";
import BlockUser from "../../Compoonents/HomeComponens/BlockUser";

const Home = () => {
  return (
    <div className="flex gap-5 bg-purple-200  ">
      <div>
        <Sidebar />
      </div>
      <div className="flex  bg-purple-200 mt-2 justify-between   items-start flex-wrap">
        <div className="w-[26vw]   px-2">
          <GroupList />
        </div>
        <div className="w-[26vw]   px-2">
          <Friends />
        </div>
        <div className="w-[26vw]   px-2">
          <UserLIst />
        </div>
        <div className="w-[26vw]   px-2">
          <FriendRequest />
        </div>
        <div className="w-[26vw]   px-2">
          <Group />
        </div>
        <div className="w-[26vw]   px-2">
          <BlockUser />
        </div>
      </div>
    </div>
  );
};

export default Home;
