import { useState } from "react";
import PropTypes from "prop-types";
import MobilePhoneSidebar from "./MobilePhoneSidebar";

//props from Dashboard.jsx
const DashboardHeader = ({ selected, onSelect }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Define the icons for the desktop header as an array
  const desktopIcons = [
    "ri-global-line",
    "ri-question-line",
    "ri-notification-line",
    "ri-layout-grid-2-line",
    "ri-user-line",
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-b-gray-300">
        {/* Mobile Header */}

        <div className="flex items-center justify-between px-2 py-5 lg:hidden">
          <button
            className="text-3xl"
            onClick={() => setSidebarOpen((prev) => !prev)}
          >
            {sidebarOpen ? (
              <i className="ri-close-line"></i>
            ) : (
              <i className="ri-menu-line"></i>
            )}
          </button>
          <a href="/dashboard/myaccount">
            <img
              src="\exness.svg"
              alt="Exness logo"
              className="inline-block h-5"
            />
          </a>
          <button className="text-2xl">
            <i className="ri-notification-4-line"></i>
          </button>
        </div>

        {/* Desktop Header */}
        <div className="px-4 py-2 hidden lg:flex items-center justify-between ">
          <a href="/dashboard/myaccount">
            <img
              src="\exness.svg"
              alt="Exness logo"
              className="inline-block h-5"
            />
          </a>
          <div className="flex items-center h-full">
            <div className="flex gap-1">
              <div className="text-sm leading-5 font-semibold tracking-wider">
                00.00
              </div>
              <div className="text-sm leading-5 font-semibold tracking-wider">
                USD
              </div>
            </div>
            <div className="flex gap-2 ml-4">
              {desktopIcons.map((icon, idx) => (
                <button
                  key={idx}
                  className="inline-flex items-center min-w-10 min-h-10 p-2 cursor-pointer justify-center align-middle"
                >
                  <i className={icon}></i>
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <MobilePhoneSidebar
        sidebarOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onSelect={onSelect}
        selected={selected}
      />

      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

DashboardHeader.propTypes = {
  selected: PropTypes.any.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default DashboardHeader;
