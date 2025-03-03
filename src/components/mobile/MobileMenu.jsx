/* eslint-disable react/prop-types */
// MobileMenu.jsx (snippet)
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import SignInButton from "../buttons/SignInButton";
import TradingDropdown from "./TradingDropdown";
import MarketsDropdown from "./MarketsDropdown";

import { primaryNavItems } from "../../utils/constants";
import MobileMenuHeader from "./MobileMenuHeader";

const MobileMenu = ({ toggleMenu }) => {
  const [showTradingDropDown, setShowTradingDropDown] = useState(false);
  const [showMarketsDropDown, setShowMarketsDropDown] = useState(false);

  const toggleTradingDropdown = () => {
    setShowTradingDropDown((prev) => !prev);
    if (showMarketsDropDown) setShowMarketsDropDown(false);
  };

  const toggleMarketsDropdown = () => {
    setShowMarketsDropDown((prev) => !prev);
    if (showTradingDropDown) setShowTradingDropDown(false);
  };

  // If the markets dropdown is open, render the full-screen MarketsDropdown component.
  if (showMarketsDropDown) {
    return (
      <MarketsDropdown
        onClose={() => setShowMarketsDropDown(false)}
        toggleMenu={toggleMenu}
      />
    );
  }

  // If the trading dropdown is open, render the full-screen Trading component.
  if (showTradingDropDown) {
    return (
      <TradingDropdown
        onClose={() => setShowTradingDropDown(false)}
        toggleMenu={toggleMenu}
      />
    );
  }

  return (
    <div className="lg:hidden fixed inset-0 h-screen overflow-hidden bg-white z-50">
      {/* Mobile Menu Header */}
      <MobileMenuHeader toggleMenu={toggleMenu} />

      {/* Mobile Navigation */}
      <div className="flex flex-col px-7 py-6">
        <nav className="flex flex-col gap-6">
          {/* Trading Dropdown Toggle */}
          <button
            onClick={toggleTradingDropdown}
            className={`flex items-center ${
              showTradingDropDown
                ? "w-full pb-6 border-b border-b-gray-300 text-gray-500"
                : ""
            }`}
          >
            {showTradingDropDown ? (
              <>
                <i className="ri-arrow-left-s-line"></i>
                <span className="ml-2">Trading</span>
              </>
            ) : (
              <>
                <span>Trading</span>
                <i className="ri-arrow-right-s-line ml-2"></i>
              </>
            )}
          </button>
          {showTradingDropDown && <TradingDropdown />}

          {/* Markets Dropdown Toggle */}
          <button
            onClick={toggleMarketsDropdown}
            className={`flex items-center ${
              showMarketsDropDown
                ? "w-full pb-6 border-b border-b-gray-300 text-gray-500"
                : ""
            }`}
          >
            <span>Markets</span>
            <i className="ri-arrow-right-s-line ml-2"></i>
          </button>

          {/* Primary Navigation: only shown when no dropdown is open */}
          {!showTradingDropDown &&
            !showMarketsDropDown &&
            primaryNavItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between w-full"
              >
                <button className={item.extraClass || ""}>
                  <span>{item.label}</span>
                  <i className={item.icon || "ri-arrow-right-s-line"}></i>
                </button>
              </div>
            ))}
        </nav>

        {/* Mobile Buttons */}
        <div>
          <div className="mt-6 flex flex-row justify-center items-center gap-4">
            <Button text={"Register"} />
            <Link to={"/login"}>
              <SignInButton text={"Sign in"} />
            </Link>
          </div>

          {/* Language Selector */}
          <div className="mt-6 text-center">
            <a href="#" className="font-light text-lg">
              <i className="ri-global-line"></i> En
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
