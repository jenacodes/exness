import { LuLayoutDashboard } from "react-icons/lu";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { CgArrowTopRightO } from "react-icons/cg";
import { RxCountdownTimer } from "react-icons/rx";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { BiSolidUserAccount } from "react-icons/bi";
import { HiOutlineChartBar } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { useState } from "react";

const menuItems = [
  { icons: <LuLayoutDashboard size={20} />, label: "My account" },
  { icons: <IoArrowDownCircleOutline size={22} />, label: "Deposit" },
  { icons: <CgArrowTopRightO size={20} />, label: "Withdrawal" },
  { icons: <RxCountdownTimer size={20} />, label: "Setting" },
  { icons: <HiOutlineNewspaper size={20} />, label: "Log" },
  { icons: <BiSolidUserAccount size={20} />, label: "Report" },
  { icons: <HiOutlineChartBar size={20} />, label: "Performance" },
  { icons: <FaRegHeart size={20} />, label: "Support hub" },
  { icons: <IoSettingsOutline size={20} />, label: "Settings" },
];

// eslint-disable-next-line react/prop-types
export default function DashboardSidebar({ selected, onSelect }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{ height: "calc(100vh - 3.5rem)" }} // 3.5rem is the header height
      className={`z-50 hidden fixed top-14 shadow-md h-screen p-2 lg:flex flex-col duration-500 bg-white text-gray-700 border-r border-r-gray-300 ${
        open ? "w-60" : "w-16"
      }`}
    >
      {/* Body */}
      <ul className="flex-1">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => onSelect(item.label)}
            className={`px-3 py-2 my-2 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group ${
              selected === item.label
                ? "bg-gray-200"
                : "hover:border border-gray-500 hover:bg-gray-100"
            }`}
          >
            <div>{item.icons}</div>
            <p
              className={`${
                !open && "w-0 translate-x-24"
              } duration-500 overflow-hidden`}
            >
              {item.label}
            </p>
            <p
              className={`${
                open && "hidden"
              } absolute left-32 shadow-md rounded-md w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16`}
            >
              {item.label}
            </p>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="bg-sidebar flex items-center gap-2 px-3">
        <FaUserFriends size={15} />
        <div
          className={`leading-5 ${
            !open && "w-0 translate-x-24"
          } duration-200 overflow-hidden`}
        >
          <span className="text-sm">Invite Your friends and earn Money</span>
        </div>
      </div>
    </nav>
  );
}
