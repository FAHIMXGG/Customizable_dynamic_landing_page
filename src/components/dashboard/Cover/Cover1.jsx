/** @format */

import phone from "../../../assets/Phone Front 2.png";
import girl from "../../../assets/girl.png";
import { FaShoppingCart } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import Navbar1 from "../Navbar/Navbar1";
import { useState } from "react";
import getHeaderData from "../../../utils/getHeaderData";

const Cover1 = () => {
  const [isEditable, setIsEditable] = useState(false);

  const { header, isLoading, refetch } = getHeaderData(1);
  const { banner_title, logo, banner_des, banner_img, navigation } = header;

  return (
    <div className="lg:px-36 px-4 bg-[#EBF8FB] h-full">
      <Navbar1 logo={logo} navigation={navigation} />
      <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
        <div className="flex-1 space-y-2">
          <h2 className="text-5xl font-bold">{banner_title}</h2>
          <p className="text-gray-500">{banner_des}</p>
          <div className="flex items-center gap-6">
            <button className="rounded-md text-white border py-2 px-4 bg-blue-800">
              Get Started
            </button>
            <button className="rounded-md text-black border-2 py-2 px-4">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img src={banner_img} alt="img" className="lg:scale-110 lg:mt-10" />
        </div>
      </div>
    </div>
  );
};

export default Cover1;
