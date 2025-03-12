import { useState } from "react";
// import logo from "../logo.png";

// icons
import { MdMenuOpen } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaProductHunt, FaUserFriends } from "react-icons/fa";
// import { FaUserCircle } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { IoLogoBuffer } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";

const menuItems = [
  {
    icons: <IoHomeOutline size={15} />,
    label: "Home",
  },
  {
    icons: <FaProductHunt size={15} />,
    label: "Products",
  },
  {
    icons: <MdOutlineDashboard size={15} />,
    label: "Dashboard",
  },
  {
    icons: <CiSettings size={15} />,
    label: "Setting",
  },
  {
    icons: <IoLogoBuffer size={15} />,
    label: "Log",
  },
  {
    icons: <TbReportSearch size={15} />,
    label: "Report",
  },
];

export default function DashboardSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`shadow-md h-screen p-2 flex flex-col duration-500 bg-white text-gray-700 border-r border-r-gray-300 ${
        open ? "w-60" : "w-16"
      }`}
    >
      {/* Header */}
      <div className="px-3 py-2 h-20 flex justify-between items-center">
        <div>
          <MdMenuOpen
            size={15}
            className={`duration-500 cursor-pointer ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      {/* Body */}
      <ul className="flex-1">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="px-3 py-2 my-2 hover:bg-gray-300 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group"
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
      <div className="bg-white flex items-center gap-2 px-3 py-2">
        <FaUserFriends size={15} />
        <div
          className={`leading-5 ${
            !open && "w-0 translate-x-24"
          } duration-200 overflow-hidden`}
        >
          <span className="text-lg">Invite Your friends and earn Money</span>
        </div>
      </div>
    </nav>
  );
}
