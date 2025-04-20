/* eslint-disable react/prop-types */
import { HiOutlineUserCircle } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LuWallet } from "react-icons/lu";
const MobilePhoneSidebar = ({ sidebarOpen }) => {
  return (
    <div
      className={`
      fixed top-19 left-0 h-screen max-w-xs w-full
      bg-white backdrop-blur-lg shadow-xl p-2
      transform transition-transform transition-opacity duration-300 ease-in-out
      z-50
      ${
        sidebarOpen
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
      }
    `}
    >
      {/* Sidebar Links */}
      <nav className="flex flex-col gap-3">
        <div>
          <div className="h-20 flex p-2.5 ">
            <div className="flex items-center justify-between gap-2">
              <HiOutlineUserCircle className="text-lg text-gray-500" />
              <div className="text-gray-700">je.........el@gmail.com</div>
            </div>
          </div>
        </div>
        <hr className=" border-gray-200" />
        <div className="flex items-center justify-between gap-2 p-2 rounded hover:bg-gray-100 min-h-10 cursor-pointer">
          <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100">
            <LuWallet className="text-lg font-semibold" />
            <div className="text-sm font-semibold">00.00</div>
            <div className="text-sm">USD</div>
          </div>
          <div>
            <MdOutlineKeyboardArrowDown className="text-lg text-gray-500" />
          </div>
        </div>
        <hr className=" border-gray-200" />
        <a href="/dashboard" className="px-2 py-1 rounded hover:bg-gray-400">
          Dashboard
        </a>
        <a href="withdrawal" className="px-2 py-1 rounded hover:bg-gray-100">
          withdrawal
        </a>
        <a href="/settings" className="px-2 py-1 rounded hover:bg-gray-100">
          Settings
        </a>
      </nav>
    </div>
  );
};

export default MobilePhoneSidebar;
