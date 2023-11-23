import { useEffect, useState } from "react";
import Cover1 from "./Cover/Cover1";
import Cover2 from "./Cover/Cover2";
import Cover3 from "./Cover/Cover3";
import Cover5 from "./Cover/Cover5";
import Cover4 from "./Cover/Cover4";

const HomeComponent = ({ click }) => {

  const action = click;
  console.log("action",action)

  return (
    <>
      {
                action === 1  ? (
                    <Cover1/>
                ) 
                : action === 2  ? (
                    <Cover2/>
                )
                : action === 3  ? (
                    <Cover3/>
                )
                : action === 4  ? (
                    <Cover4/>
                )
                : action === 5  ? (
                    <Cover5/>
                )
                 : (<Cover1/>)
            }

    </>
  );
};

export default HomeComponent;
