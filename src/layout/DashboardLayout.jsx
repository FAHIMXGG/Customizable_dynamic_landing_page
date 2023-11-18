/** @format */

import Navbar from "../Dashboard/Navbar/Navbar";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default DashboardLayout;
