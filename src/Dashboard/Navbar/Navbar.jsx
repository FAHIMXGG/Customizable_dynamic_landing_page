/** @format */

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-base-100 shadow-xl rounded-2xl border-t border-gray-100 flex items-center justify-between">
      <div>
        <ul className="flex items-center gap-7 text-indigo-500 lg:ml-48">
          <li>My Project</li>
          <li>Build Components</li>
        </ul>
      </div>
      <div className="w-24 h-11 mr-4">
        <button className="flex gap-2 items-center justify-center bg-[#FFB800] w-full h-full rounded-lg">
          <div className="w-5 h-5 rounded-full bg-black"></div>
          <span>Shajib</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
