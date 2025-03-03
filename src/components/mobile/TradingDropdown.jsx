/* eslint-disable react/prop-types */
// TradingDropdown.jsx
import { Link } from "react-router-dom";
import { tradingDropdownSections } from "../../utils/constants";
import MobileMenuHeader from "./MobileMenuHeader";
import Button from "../buttons/Button";
import SignInButton from "../buttons/SignInButton";

const linkClass =
  "leading-7 tracking-wide font-poppins hover:text-gray-500 transition-all pl-5";

const TradingDropdown = ({ onClose, toggleMenu }) => (
  <div className="lg:hidden fixed inset-0 h-screen bg-white z-50">
    <MobileMenuHeader toggleMenu={toggleMenu} />

    <div className="flex items-center justify-between px-7 py-4 border-b border-b-gray-300">
      <button onClick={onClose} className="flex items-center">
        <i className="ri-arrow-left-s-line text-2xl"></i>
        <span className="ml-2 text-gray-500">Trading</span>
      </button>
    </div>

    <div className="flex flex-col gap-4 pb-6 border-b border-b-gray-300 px-7 py-6 overflow-auto ">
      {tradingDropdownSections.map((section) => (
        <div key={section.title} className="flex flex-col gap-4">
          <div className="text-lg font-semibold leading-6">{section.title}</div>
          <div className="flex flex-col gap-2.5">
            {section.links.map((link) => (
              <Link key={link.label} to={link.to} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
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
);

export default TradingDropdown;
