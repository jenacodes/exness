/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const AccountTypeDropdown = ({
  onSelect,
  options = ["Standard", "Raw", "Zero", "Spread"],
  defaultOption = "Standard",
  className = "",
}) => {
  const { pathname } = useLocation();
  const isDashboardPage = pathname === "/dashboard";

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const dropdownRef = useRef(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        className={` w-full px-4 py-2.5 text-left bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-200 transition-all duration-150 flex justify-between ${
          isDashboardPage ? "lg:w-44 lg:flex" : "lg:hidden"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="block truncate">{selectedOption}</span>
        <i
          className={`ri-arrow-down-s-line transition-transform duration-300 ease-in-out transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        ></i>
      </button>

      {isOpen && (
        <div
          className={`absolute z-10 w-full bg-white rounded-md shadow-lg ${
            isDashboardPage && "lg:w-44"
          }`}
        >
          <ul
            tabIndex="-1"
            role="listbox"
            className="py-1 overflow-auto text-base rounded-md ring-opacity-5 focus:outline-none"
          >
            {options.map((option) => (
              <li
                key={option}
                role="option"
                className="cursor-pointer select-none relative px-4 py-2 hover:bg-blue-50 transition-colors duration-150"
                onClick={() => handleOptionClick(option)}
              >
                <span
                  className={`block truncate p-4 ${
                    selectedOption === option ? "bg-gray-200" : "text-gray-900"
                  }`}
                >
                  {option}
                </span>
                {selectedOption === option && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-300">
                    <i className="ri-check-line"></i>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountTypeDropdown;
