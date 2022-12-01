import React from "react";

//Icons
import { AiOutlineAppstore, AiOutlineDashboard } from "react-icons/ai";
import { BsGlobe2, BsListUl } from "react-icons/bs";
import { IoDocumentSharp, IoLogOutOutline } from "react-icons/io5";
import { BiBookOpen, BiChevronDown, BiUser } from "react-icons/bi";
import { MdInbox, MdOutlineContactSupport, MdSettings } from 'react-icons/md'
import { GoFileSubmodule } from 'react-icons/go'
const Sidebar = () => {
  const mainList = [
    {
      name: "Users",
      icon: <BiUser className="w-5 h-5" />,
    },
    {
      name: "Documents",
      icon: <BiBookOpen className="w-5 h-5" />,
    },
    {
      name: "Applications",
      icon: <AiOutlineAppstore className="w-5 h-5" />,
    },
    {
      name: "Pages",
      icon: <IoDocumentSharp className="w-5 h-5" />,
    },
  ];
  const secondaryList = [
    {
      name: "Support Center",
      icon: <MdOutlineContactSupport className="w-5 h-5" />,
    },
    {
      name: "Inbox",
      icon: <MdInbox className="w-5 h-5" />,
    },
    {
      name: "File Manager",
      icon: <GoFileSubmodule className="w-5 h-5" />,
    },
    {
      name: "Data List",
      icon: <BsListUl className="w-5 h-5" />,
    },
    {
      name: "",
      icon: "",
    },
    {
      name: "Settings",
      icon: <MdSettings className="w-5 h-5" />,
    },
    {
      name: "Log Out",
      icon: <IoLogOutOutline className="w-5 h-5" />,
    },
  ];
  return (
    <>
      <div className="w-[18%] h-screen fixed border">
        <div className="flex items-center gap-5 py-4 px-4 border-b h-16">
          <span className="text-md text-gray-50 bg-blue-700 rounded-lg px-2">
            <p className="text-lg font-black">A</p>
          </span>
          <h4 className="text-lg font-medium">Artemis</h4>
        </div>
        <div className="px-4 pt-4 text-gray-400">
          <h6 className="text-gray-300 text-sm font-semibold">MAIN</h6>
          <div className="pt-2 text-gray-500 space-y-1">
            <div className="bg-blue-700 hover:bg-white hover:text-gray-400 text-white flex items-center justify-between py-2 rounded-sm font-medium px-2 cursor-pointer">
              <span className="flex items-center gap-4">
                <AiOutlineDashboard className="w-6 h-6" />
                <h4 className="text-sm font-semibold">Dashboard</h4>
              </span>
              <BiChevronDown className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between py-2 font-medium px-2 hover:bg-gray-100 cursor-pointer">
              <span className="flex items-center gap-4">
                <BsGlobe2 className="w-5 h-5" />
                <h4 className="text-sm font-semibold">Discovery</h4>
              </span>
              <span className="text-white text-sm bg-blue-700 rounded-full w-5 h-5 flex items-center justify-center">
                <h4>4</h4>
              </span>
            </div>
            {mainList.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2 font-medium px-2 hover:bg-gray-100 cursor-pointer"
              >
                <span className="flex items-center gap-4">
                  {item.icon}
                  <h4 className="text-sm font-semibold">{item.name}</h4>
                </span>
                <BiChevronDown className="w-5 h-5" />
              </div>
            ))}            
                  </div>
          <h6 className="text-gray-300 text-sm font-semibold mt-5">SECONDARY</h6>
          <div className="pt-2 text-gray-500 space-y-1">            
            {secondaryList.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 py-2 font-medium px-2"
              >
                  {item.icon}
                  <h4 className="text-sm font-semibold">{item.name}</h4>
              </div>
            ))}            
                  </div>   
        </div>
      </div>
    </>
  );
};

export default Sidebar;
