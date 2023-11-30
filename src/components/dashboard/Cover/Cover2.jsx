/** @format */

import Navbar2 from "../Navbar/Navbar2";

const Cover2 = () => {
  return (
    <div className="lg:px-36 bg-[#FFD957] h-full">
      <Navbar2 />
      <div className="flex flex-row-reverse lg:flex-row gap-10 items-center">
        <div className="flex-1 space-y-10">
          <h2 className="text-5xl font-bold ">
            Build your digital brand from zero to hero.
          </h2>
          <p className="text-gray-500">
            Dlex empowers designers to build professional, custom websites in a
            completely visual canvas with no code.
          </p>
          <div className="flex items-center h-16 rounded-md overflow-hidden">
            <div className="h-full">
              <input
                type="email"
                placeholder="Email"
                autoFocus={true}
                className="h-full bg-[#ecc339] px-2 placeholder:text-gray-600 border-2 border-r-0 border-[#856e219f]"
              />
            </div>
            <button className="h-full w-full bg-slate-800 text-white cursor-pointer">
              Get started
            </button>
          </div>

          <div className="flex justify-between">
            <div className="space-y-3">
              <p>Featured Project</p>
              <h2 className="text-xl">
                UI Designe in <br /> the West Pasific.
              </h2>
            </div>
            <div className="min-h-[5rem] border border-l"></div>
            <div className="space-y-3">
              <p>External Project</p>
              <h2 className="text-xl">
                Create Best Pratice <br /> UX.UI Design.
              </h2>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://templatekit.pinisiart.com/digitalkit/wp-content/uploads/sites/2/2020/06/ilus-dua.png"
            alt="photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Cover2;
