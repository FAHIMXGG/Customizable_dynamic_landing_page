/** @format */

import { Outlet } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import MobileView from "./MobileView";

const Sidebar = () => {
  const headers = [];

  for (let i = 1; i < 10; i++) {
    headers.push(i);
  }

  return (
    <div className="mt-10 flex gap-8">
      <SidebarMenu />
      <div className="flex-1">
        <div className="w-max flex items-center gap-6 h-fit lg:ml-7">
          {headers.map((header) => (
            <button
              key={header}
              className="border-2 rounded px-2 text-gray-600"
            >
              Header {header}
            </button>
          ))}
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
