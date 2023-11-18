/** @format */

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
        <div className="w-full h-full border mt-8"></div>
      </div>
    </div>
  );
};

export default Sidebar;
