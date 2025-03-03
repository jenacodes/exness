/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { marketsDropdownSections } from "../../utils/constants";
import Button from "../buttons/Button";
import SignInButton from "../buttons/SignInButton";
import MobileMenuHeader from "./MobileMenuHeader";

const linkClass =
  "leading-7 tracking-wide font-poppins hover:text-gray-500 transition-all pl-5";

const MarketsDropdown = ({ onClose, toggleMenu }) => (
  <div className="lg:hidden fixed inset-0 h-screen bg-white z-50">
    <MobileMenuHeader toggleMenu={toggleMenu} />

    {/* Full-screen Markets Header */}
    <div className="flex items-center justify-between px-7 py-4 border-b border-b-gray-300">
      <button onClick={onClose} className="flex items-center">
        <i className="ri-arrow-left-s-line text-2xl"></i>
        <span className="ml-2 text-gray-500">Markets</span>
      </button>
    </div>

    {/* Markets Content */}
    <div className="px-7 py-6 overflow-auto">
      {marketsDropdownSections.map((section, index) => (
        <div
          key={`section-${index}-${section.label}`}
          className="flex flex-col gap-4 pb-6 border-b border-b-gray-300"
        >
          <div className="flex flex-col gap-2.5">
            {section.links.map((link, linkIndex) => (
              <Link
                key={`link-${linkIndex}-${link.label}`}
                to={link.to}
                className={linkClass}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Footer Buttons and Language Selector */}
    <div>
      <div className="mt-6 flex flex-row justify-center items-center gap-4">
        <Button text="Register" />
        <Link to="/login">
          <SignInButton text="Sign in" />
        </Link>
      </div>
      <div className="mt-6 text-center">
        <a href="#" className="font-light text-lg">
          <i className="ri-global-line"></i> En
        </a>
      </div>
    </div>
  </div>
);

export default MarketsDropdown;
