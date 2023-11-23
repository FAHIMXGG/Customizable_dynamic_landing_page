
import phone from "../../../assets/Phone Front 2.png";
import girl from "../../../assets/girl.png";
import { FaShoppingCart } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import Navbar1 from "../Navbar/Navbar1";

const Cover1 = ({hover}) => {
  return (
    <div className="lg:px-36 px-4 bg-[#EBF8FB] h-full">
      {hover}
      <Navbar1 />
      <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
        <div className="flex-1 space-y-2">
          <h2 className="text-5xl font-bold ">
            The modern way to build for the web
          </h2>
          <p className="text-gray-500">
            Dlex empowers designers to build professional, custom websites in a
            completely visual canvas with no code.
          </p>
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
          <div className="flex items-center">
            <div className="h-[84px] w-[196px] rounded-xl bg-slate-50 shadow-xl -mr-20 -mb-40 z-20 p-4 flex gap-2">
              <span className="overflow-hidden rounded-full w-16 h-8 bg-fuchsia-200 flex items-center justify-center">
                <FaShoppingCart className="text-fuchsia-600" />
              </span>
              <div>
                <h3 className="text-xs font-bold">
                  34 item has been added to a cart.
                </h3>
                <p className="text-gray-500 text-xs">30m ago</p>
              </div>
              <BsThreeDots className="text-xl" />
            </div>
            <div className="z-10">
              <img src={phone} alt="phone" />
            </div>
            <div className="-ml-6 -mt-44">
              <img src={girl} alt="girl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover1;