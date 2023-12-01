/** @format */

import phone from "../../../assets/Phone Front 2.png";
import girl from "../../../assets/girl.png";
import { FaPlayCircle, FaShoppingCart } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import Navbar3 from "../Navbar/Navbar3";

const Cover3 = () => {
  return (
    <div className="px-4 h-full relative">
      <div className="w-full overflow-hidden">
        <img
          src="https://askproject.net/arpent/wp-content/uploads/sites/82/2022/06/stylish-dining-room-interior-WAP76C9.jpg"
          alt="image"
          className="img-zoom"
        />
      </div>
      <div className="w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-8">
        <h2 className="text-5xl font-bold text-white">
          The modern way <br /> to build for the web.
        </h2>
        <div className="flex items-center gap-10">
          <button className="px-10 uppercase text-white py-2 bg-amber-800">
            get started
          </button>
          <FaPlayCircle className="text-4xl text-white bg-amber-800 rounded-full overflow-hidden" />
        </div>
      </div>
      <div className="lg:px-36 absolute top-0">
        <Navbar3 />
      </div>
    </div>
  );
};

export default Cover3;
