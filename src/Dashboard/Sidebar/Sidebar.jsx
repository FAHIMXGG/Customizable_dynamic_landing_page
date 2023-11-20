/** @format */
import {
  MdBattery5Bar,
  MdOutlineNetworkWifi,
  MdOutlineSignalCellularAlt,
} from "react-icons/md";
import { FaLock, FaSignOutAlt } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  return (
    <div className="mt-10 flex gap-8">
      <SidebarMenu />
      <div className="flex-1">
        <div className="w-max flex items-center gap-6 h-fit lg:ml-7">
          <button className="border-2 rounded px-2 text-gray-600">
            Header 1
          </button>
          <button className="border-2 rounded px-2 text-gray-600">
            Header 2
          </button>
          <button className="border-2 rounded px-2 text-gray-600">
            Header 3
          </button>
          <button className="border-2 rounded px-2 text-gray-600">
            Header 4
          </button>
        </div>
        <div className="w-full h-full mt-8 flex gap-12">
          <div className=" border w-full">
            <Outlet />
          </div>
          <div className="w-[377px] h-[817px]">
            <div className="h-20 bg-black bg-opacity-80 p-2 flex flex-col justify-between">
              <div className="flex items-center justify-between text-white">
                <p>
                  {new Date().getHours()}:{new Date().getMinutes()}
                </p>
                <div className="flex items-center gap-1">
                  <MdOutlineSignalCellularAlt />
                  <MdOutlineNetworkWifi />
                  <MdBattery5Bar />
                </div>
              </div>
              <div className="h-7 rounded-xl bg-gray-600 flex items-center justify-between px-2 text-white">
                <span></span>
                <div className="flex items-center gap-1">
                  <FaLock />
                  <span>diex.io</span>
                </div>
                <FaSignOutAlt className="-rotate-90" />
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
