/* eslint-disable react/prop-types */
import { BiSolidUserAccount } from "react-icons/bi";
import { CgArrowTopRightO } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { IoArrowDownCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { RxCountdownTimer } from "react-icons/rx";

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

const SidebarComponent = ({ selected, handleClick }) => {
  return (
    <div>
      <ul className="flex-1">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(item.label)}
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
    </div>
  );
};

export default SidebarComponent;
