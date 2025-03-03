import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import HeaderBtnCont from "./HeaderBtnCont";
import MobileMenu from "../mobile/MobileMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Main Header */}
      <header className="sticky top-0 left-0 w-full z-50 bg-white">
        <div className="flex items-center justify-between px-7">
          {/* Logo & Desktop Navigation */}
          <div className="flex items-center gap-6 h-16">
            <Link to="/" className="shrink-0">
              <img
                src="https://d33vw3iu5hs0zi.cloudfront.net/media/logo_small_new_67037e8ecb.svg"
                alt="exness logo"
              />
            </Link>
            <div className="hidden md:flex">
              <HeaderNav />
            </div>
          </div>

          {/* Desktop Buttons & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <div className=" lg:flex items-center gap-4">
              <a
                href="/login"
                className="block lg:hidden text-sm text-gray-600"
              >
                Sign in
              </a>
              <HeaderBtnCont />
            </div>
            <button onClick={toggleMobileMenu} className="lg:hidden">
              <i className="ri-menu-line "></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <MobileMenu toggleMenu={toggleMobileMenu} />}
    </>
  );
};

export default Header;
