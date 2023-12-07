/** @format */

import React from "react";
import Pricing1 from "./Pricing1";
import Pricing2 from "./Pricing2";

const Pricing = ({ click }) => {
  return (
    <div>
      {click === 1 ? (
        <Pricing1 />
      ) : click === 2 ? (
        <Pricing2 />
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
        <>gg</>
      )}
    </div>
  );
};

export default Pricing;
