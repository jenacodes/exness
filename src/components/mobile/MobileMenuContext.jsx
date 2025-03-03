/* eslint-disable react/prop-types */
// MobileMenuContext.jsx
import { createContext, useContext, useState } from "react";

const MobileMenuContext = createContext();

export const useMobileMenu = () => {
  return useContext(MobileMenuContext);
};

export const MobileMenuProvider = ({ children, initialToggleMenu }) => {
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

  // Pass down the parent toggleMenu prop too.
  const value = {
    showTradingDropDown,
    showMarketsDropDown,
    toggleTradingDropdown,
    toggleMarketsDropdown,
    toggleMenu: initialToggleMenu,
  };

  return (
    <MobileMenuContext.Provider value={value}>
      {children}
    </MobileMenuContext.Provider>
  );
};
