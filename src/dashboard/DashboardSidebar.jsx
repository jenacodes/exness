/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import SidebarComponent from "./SidebarComponent"; // Adjust the path as needed

export default function DashboardSidebar({ selected, onSelect }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Combine onSelect and navigation in the click handler.
  const handleClick = (label) => {
    if (onSelect) {
      onSelect(label);
    }
    // Convert the label to a route-friendly string.
    const route = label.toLowerCase().replace(/\s+/g, "");
    navigate(`/dashboard/${route}`);
  };

  return (
    <nav
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{ height: "calc(100vh - 3.5rem)" }}
      className={`z-50 hidden fixed top-14 shadow-md h-screen p-2 lg:flex flex-col duration-500 bg-white text-gray-700 border-r border-r-gray-300 ${
        open ? "w-60" : "w-16"
      }`}
    >
      {/* Body */}
      <SidebarComponent handleClick={handleClick} selected={selected} />

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
