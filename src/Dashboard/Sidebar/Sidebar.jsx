/** @format */

import { Outlet } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import MobileView from "./MobileView";
import { useState } from "react";
import Cover from "../../components/dashboard/Cover/Cover";
import HomeComponent from "../../components/dashboard/HomeComponent";
import {
  IoArrowForwardCircleOutline,
  IoArrowBackCircleOutline,
} from "react-icons/io5";

const Sidebar = () => {

  return (
    <div className="flex gap-8 mt-5">
      <SidebarMenu />
      <div className="flex-1 ">
        <div >
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
