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

const HomeComponent = ({ click }) => {

  return (
    <>
      {
                click === 1  ? (
                    <Cover1/>
                ) 
                : click === 2  ? (
                    <Cover2/>
                )
                : click === 3  ? (
                    <Cover3/>
                )
                : click === 4  ? (
                    <Cover4/>
                )
                : click === 5  ? (
                    <Cover5/>
                )
                : click === 6  ? (
                    <Cover6/>
                )
                : click === 7  ? (
                    <Cover7/>
                )
                : click === 8  ? (
                    <Cover8/>
                )
                : click === 9  ? (
                    <Cover9/>
                )
                 : (<Cover1/>)
            }

    </>
  );
};

export default HomeComponent;
