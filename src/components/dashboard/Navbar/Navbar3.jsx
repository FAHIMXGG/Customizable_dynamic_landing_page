/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../assets/Logo.png";
const links = [
  { id: 1, title: "home", url: "/" },
  { id: 2, title: "pricing", url: "/" },
  { id: 3, title: "about", url: "/" },
  { id: 4, title: "project", url: "/" },
  { id: 4, title: "service", url: "/" },
  { id: 4, title: "page", url: "/" },
];
const Navbar3 = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <div className="w-full h-24 flex items-center gap-12 justify-between text-white">
        <div>
          <img src={logo} alt="logo" className="w-60 object-cover" />
        </div>
        <div className="lg:flex hidden w-full gap-12 capitalize">
          {links.map((link) => (
            <Link key={link.id} to={link.url}>
              {link.title}
            </Link>
          ))}
        </div>

        <div className="w-full flex justify-end cursor-pointer">
          <button className="border py-2 px-4 whitespace-nowrap rounded-md text-white bg-slate-800">
            Get Access
          </button>
        </div>

        <div className="lg:hidden w-20 z-40">
          <button
            className="btn btn-ghost btn-circle "
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? (
              <FaTimes className="text-error text-xl" />
            ) : (
              <FaBars className="text-error text-xl" />
            )}
          </button>
        </div>
      </div>
      <div className="relative">
        <div
          className={`lg:hidden z-50 bg-white flex flex-col w-full px-10 space-y-4 bg-base-200 absolute transition-all duration-700 ease-in-out ${
            isNavOpen ? "left-0 top-0 py-5" : "-left-[9999px] rounded-md"
          }`}
        >
          {links.map((link) => (
            <Link key={link.id} to={link.url} className="capitalize">
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar3;
