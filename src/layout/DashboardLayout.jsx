/** @format */

import Navbar from "../Dashboard/Navbar/Navbar";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="max-w-[2150px] mx-auto p-6">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default DashboardLayout;
