/** @format */

import { useEffect, useState } from "react";
import Cover1 from "./Cover/Cover1";
import Cover2 from "./Cover/Cover2";
import Cover3 from "./Cover/Cover3";
import Cover5 from "./Cover/Cover5";
import Cover4 from "./Cover/Cover4";
import Cover6 from "./Cover/cover6";
import Cover7 from "./Cover/cover7";
import Cover8 from "./Cover/cover8";
import Cover9 from "./Cover/cover9";
import Cover from "./Cover/Cover";
import MobileView from "../../Dashboard/Sidebar/MobileView";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import Swal from "sweetalert2";

const HomeComponent = () => {
  const [isActive, setIsActive] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [hover, setHover] = useState();
  const [click, setClick] = useState(1);

  const decreaseClick = () => {
    setClick((prevClick) => {
      setIsActive((prevValue) => (prevValue > 1 ? prevClick - 1 : prevValue));
      return prevClick > 1 ? prevClick - 1 : prevClick;
    });
  };

  const increaseClick = () => {
    setClick((prevClick) => {
      setIsActive((prevValue) => (prevValue < 9 ? prevClick + 1 : prevValue));
      return prevClick < 9 ? prevClick + 1 : prevClick;
    });
  };

  const headers = [];
  for (let i = 1; i < 10; i++) {
    headers.push(i);
  }
  const hoverTextStyle = {
    cursor: "pointer",
    position: "relative",
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const hoverWindowStyle = {
    display: "block",
    position: "absolute",
    top: "100%",
    left: "60%",
    transform: "translateX(-50%)",
    backgroundColor: "#fff",
    padding: "10px",
    border: "1px solid #ccc",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 50,
    width: "1400px",
    height: "704px",
    opacity: isHovered ? 1 : 0,
    transition: "opacity 0.3s ease-in-out",
  };

  const handleHover = (header) => {
    setHover(header);
  };
  //console.log(hover)

  const handleClick = (header) => {
    setClick(header);
    setIsActive(header);
  };

  const handleUpdate = () => {
    fetch(
      "https://dynamic-landing-page-server.vercel.app/headers/656d5cbf17fd01f5c69cbd3b",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ header: click }),
      }
    )
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Saved Header ${click}`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          console.error("Failed");
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <>
      <div className="flex gap-2">
        <button onClick={decreaseClick}>
          <IoArrowBackCircleOutline />
        </button>
        <div className="w-full h-full mt-8 flex flex-col lg:flex-row gap-5">
          <div className="w-full">
            <div className="flex items-center justify-center">
              <div className="w-full flex items-center gap-6 h-fit lg:ml-7 relative mb-10">
                {headers.map((header) => (
                  <button
                    key={header}
                    className={`rounded-md px-2 hover:bg-[#FFC700] hover:text-black transition-all duration-300 ${
                      header === isActive
                        ? "bg-[#FFC700] text-black"
                        : "text-gray-600 border-2"
                    }`}
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
                  <div className="flex items-center gap-3">
                    <div className="h-full w-[1000px]">
                      <Cover hover={hover}></Cover>
                    </div>
                    <div className="w-[380px] h-full mt-10">
                      <MobileView hover={hover} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {click === 1 ? (
              <Cover1 />
            ) : click === 2 ? (
              <Cover2 />
            ) : click === 3 ? (
              <Cover3 />
            ) : click === 4 ? (
              <Cover4 />
            ) : click === 5 ? (
              <Cover5 />
            ) : click === 6 ? (
              <Cover6 />
            ) : click === 7 ? (
              <Cover7 />
            ) : click === 8 ? (
              <Cover8 />
            ) : click === 9 ? (
              <Cover9 />
            ) : (
              <Cover1 />
            )}
          </div>
          <div className=" flex flex-col items-end gap-5">
            <div className="flex items-center gap-8">
              <button className="btn btn-warning btn-sm w-16">Edit</button>
              <button
                onClick={() => handleUpdate()}
                className="btn btn-warning btn-sm w-16"
              >
                Save
              </button>
            </div>
            <MobileView />
          </div>
        </div>

        <button onClick={increaseClick}>
          <IoArrowForwardCircleOutline />
        </button>
      </div>
    </>
  );
};

export default HomeComponent;
