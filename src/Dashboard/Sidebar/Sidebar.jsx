/** @format */

import { Outlet } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import MobileView from "./MobileView";

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
        <div className="w-full h-full mt-8 flex flex-col lg:flex-row gap-12">
          <div className="w-full">
            <Outlet />
          </div>
          <MobileView />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
