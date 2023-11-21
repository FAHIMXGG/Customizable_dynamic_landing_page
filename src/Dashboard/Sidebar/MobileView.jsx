/** @format */
import {
  MdBattery5Bar,
  MdOutlineNetworkWifi,
  MdOutlineSignalCellularAlt,
} from "react-icons/md";
import { FaLock, FaSignOutAlt } from "react-icons/fa";

const EmbeddedComponent = () => {
  return (
    <div className="max-w-[377px] h-[817px] overflow-hidden">
      <h3 className="text-3xl">hello</h3>
    </div>
  );
};

const MobileView = () => {
  return (
    <div className="hidden lg:block">
      <div className="h-20 bg-black bg-opacity-80 p-2 flex flex-col justify-between">
        <div className="flex items-center justify-between text-white">
          <p>
            {new Date().getHours()}:{new Date().getMinutes()}
          </p>
          <div className="flex items-center gap-1">
            <MdOutlineSignalCellularAlt />
            <MdOutlineNetworkWifi />
            <MdBattery5Bar />
          </div>
        </div>
        <div className="h-7 rounded-xl bg-gray-600 flex items-center justify-between px-2 text-white">
          <span></span>
          <div className="flex items-center gap-1">
            <FaLock />
            <span>diex.io</span>
          </div>
          <FaSignOutAlt className="-rotate-90" />
        </div>
      </div>
      <iframe src="/mobile" width={377} height={817} frameborder="0"></iframe>
    </div>
  );
};

export default MobileView;
