/** @format */

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "flex items-center justify-between border-2 rounded px-2 -ml-2"
          : "active-arrow"
      }
    >
      <span>{children}</span>
      <span className="icon">{<FaArrowRight />}</span>
    </NavLink>
  );
};

export default ActiveLink;
