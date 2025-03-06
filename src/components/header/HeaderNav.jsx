import { useLocation, Link } from "react-router-dom";
import { useState } from "react";

const HeaderNav = () => {
  const { pathname } = useLocation();
  const isLoginPage = pathname === "/login";

  const [showTradingDropDown, setShowTradingDropDown] = useState(false);
  const [showMarketsDropDown, setShowMarketsDropDown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropDown] = useState(false);
  // const [showPlatformsDropDown, setShowPlatformsDropDown] = useState(false);

  const closeDown = () => {
    setShowTradingDropDown(false);
    setShowMarketsDropDown(false);
    setShowCompanyDropDown(false);
  };

  return (
    <>
      {!isLoginPage && (
        <nav className="max-md:hidden md:hidden lg:block z-1">
          <ul className={"flex flex-wrap gap-3"}>
            <li>
              <button
                className="cursor-pointer  focus:text-gray-500 hover:text-gray-500 transition-all active:text-gray-500"
                onClick={() => {
                  setShowTradingDropDown((prev) => !prev);
                  setShowMarketsDropDown(false);
                  setShowCompanyDropDown(false);
                }}
              >
                Trading
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer active:text-gray-500 focus:text-gray-500 hover:text-gray-500 transition-all"
                onClick={() => {
                  setShowMarketsDropDown((prev) => !prev);
                  setShowTradingDropDown(false);
                  setShowCompanyDropDown(false);
                }}
              >
                Markets
              </button>
            </li>
            <li>
              <button className="cursor-pointer active:text-gray-500 focus:text-gray-500 hover:text-gray-500 transition-all">
                PlatForms
              </button>
            </li>
            <li>
              <button className="cursor-pointer active:text-gray-500 focus:text-gray-500 hover:text-gray-500 transition-all">
                Tools
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer active:text-gray-500 focus:text-gray-500 hover:text-gray-500 transition-all"
                onClick={() => {
                  setShowCompanyDropDown((prev) => !prev);
                  setShowTradingDropDown(false);
                  setShowMarketsDropDown(false);
                }}
              >
                Company
              </button>
            </li>
            <li>
              <button className="cursor-pointer active:text-gray-500 focus:text-gray-500 hover:text-gray-500 transition-all">
                Patners
              </button>
            </li>
          </ul>

          {/* Trading Dropdown */}
          <div
            className={`hidden bg-white z-1 lg:block absolute top-full lg:pl-[120px] w-full left-0 transition-max-h-[334px] duration-300 ease-in-out
          ${
            showTradingDropDown
              ? "opacity-100 max-h-[334px] visible pointer-events-auto"
              : "opacity-0 max-h-0 invisible pointer-events-none"
          }`}
          >
            <div className="flex gap-[72px] py-[84px] -z-20">
              <div className="flex flex-col gap-3">
                <div className="text-sm text-gray-500">Accounts</div>
                <Link
                  to="/standard-accounts"
                  className="text-xl leading-7 font-bold font-poppins hover:text-gray-500 transition-all"
                >
                  Standard Accounts
                </Link>
                <Link
                  to="/professional-accounts"
                  className="text-xl leading-7 font-bold font-poppins hover:text-gray-500 transition-all"
                >
                  Professional Accounts
                </Link>
                <Link
                  to="/demo-trading-accounts"
                  className="text-xl leading-7 font-bold font-poppins hover:text-gray-500 transition-all"
                >
                  Demo Trading Accounts
                </Link>
                <Link
                  to="/social-trading-accounts"
                  className="text-xl leading-7 font-bold font-poppins hover:text-gray-500 transition-all"
                >
                  Social Trading Accounts
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-sm text-gray-500">Conditions</div>
                <Link
                  to="/deposits-and-withdrawals"
                  className="text-xl leading-7 font-bold font-poppins hover:text-gray-500 transition-all"
                >
                  Deposits and Withdrawals
                </Link>
                <a
                  href=""
                  className="text-xl leading-7 font-bold font-poppins hover:text-gray-500 transition-all"
                >
                  Fees
                </a>
              </div>
            </div>
          </div>

          {/* Markets Dropdown */}
          <div
            className={`hidden bg-white z-10000 lg:block absolute top-full lg:pl-[120px] w-full left-0 transition-max-h-[334px] duration-300 ease-in-out
          ${
            showMarketsDropDown
              ? "opacity-100 max-h-[334px] visible pointer-events-auto"
              : "opacity-0 max-h-0 pointer-events-none"
          }`}
          >
            <div className="flex gap-[72px] py-[84px] -z-20">
              <div className="flex flex-col gap-3">
                <Link
                  to="/forex-cfd"
                  className="text-xl leading-7 font-bold font-poppins hover:text-gray-500 transition-all"
                >
                  Forex Cfd
                </Link>
                <a
                  href=""
                  className="text-xl leading-7 font-bold font-poppins hover:text-gray-500 transition-all"
                >
                  Commodities CFD
                </a>
                <Link
                  to="/stocks-cfd"
                  className="text-xl leading-7 font-bold font-poppins hover:text-gray-500 transition-all"
                >
                  Stocks Cfd
                </Link>
                <a
                  href=""
                  className="text-xl leading-7 font-bold font-poppins hover:text-gray-500 transition-all"
                >
                  Indices CFD
                </a>
                <Link
                  to="/crypto-cfd"
                  className="text-xl leading-7 font-bold font-poppins hover:text-gray-500 transition-all"
                >
                  Crypto Cfd
                </Link>
              </div>
            </div>
          </div>

          {/* PlatForm Dropdown */}
          <div
            className={`hidden bg-white z-10000 lg:block absolute top-full lg:pl-[120px] w-full left-0 transition-max-h-[334px] duration-300 ease-in-out
          ${
            showCompanyDropdown
              ? "opacity-100 max-h-[334px] visible pointer-events-auto"
              : "opacity-0 max-h-0 pointer-events-none"
          }`}
          >
            <div className="flex gap-[72px] py-[84px] -z-20">
              <div className="flex flex-col gap-3">
                <Link
                  to="/about-us"
                  className="text-xl leading-7 font-bold font-poppins hover:text-gray-500 transition-all"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
      )}

      {(showTradingDropDown || showMarketsDropDown) && (
        <div
          className={`fixed inset-0 transition-opacity duration-300 ease-in-out ${
            showTradingDropDown || showMarketsDropDown
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } backdrop-blur-sm`}
          onClick={closeDown}
        ></div>
      )}
    </>
  );
};

export default HeaderNav;
