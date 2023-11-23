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
  const [hover, setHover] = useState();
  const [click, setClick] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const decreaseClick = () => {
    setClick((prevClick) => (prevClick > 1 ? prevClick - 1 : prevClick));
  };

  const increaseClick = () => {
    setClick((prevClick) => (prevClick < 9 ? prevClick + 1 : prevClick));
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const hoverTextStyle = {
    cursor: "pointer",
    position: "relative",
  };

  const hoverWindowStyle = {
    display: "block",
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#fff",
    padding: "10px",
    border: "1px solid #ccc",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 1,
    width: "1400px",
    height: "704px",
    opacity: isHovered ? 1 : 0,
    transition: "opacity 0.3s ease-in-out",
  };

  const headers = [];
  for (let i = 1; i < 10; i++) {
    headers.push(i);
  }

  const handleHover = (header) => {
    setHover(header);
  };
  //console.log(hover)

  const handleClick = (header) => {
    setClick(header);
  };

  //console.log(click)

  return (
    <div className="mt-10 flex gap-8">
      <SidebarMenu />
      <div className="flex-1 ">
        <div className="flex items-center justify-center">
          <div
            className="w-max flex items-center gap-6 h-fit lg:ml-7"
            style={{ position: "relative" }}
          >
            {headers.map((header) => (
              <button
                key={header}
                className="border-2 rounded px-2 text-gray-600"
                onMouseOver={() => {
                  handleHover(header);
                }}
                onClick={() => {
                  handleClick(header);
                }}
                style={hoverTextStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Header {header}
              </button>
            ))}
            <div className="inline-style-tailwind" style={hoverWindowStyle}>
              <div className="flex gap-3">
                <div className="py-20 w-[1000px]">
                  <Cover hover={hover} />
                </div>
                <div className="w-[380px] h-60">
                  <MobileView hover={hover} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={decreaseClick}>
            <IoArrowBackCircleOutline />
          </button>
          <div className="w-full h-full mt-8 flex flex-col lg:flex-row gap-5">
            <div className="w-full">
              <HomeComponent click={click} />
            </div>
            <MobileView />
          </div>
          <button onClick={increaseClick}>
            <IoArrowForwardCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
