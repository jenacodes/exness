/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";

import COUNTRIES from "./Countries"; // COUNTRIES should be an array of objects like { value, label }

const CountrySelect = ({ value, onChange, onBlur }) => {
  const [displayCountry, setDisplayCountry] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const selectedCountry = COUNTRIES.find(
      (country) => country.value === value
    );
    if (selectedCountry) {
      setDisplayCountry(selectedCountry.label);
    } else {
      setDisplayCountry(value);
    }
  }, [value]);

  // Close the dropdown when clicking outside the component.
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle the input change by updating the value
  // and opening the dropdown so the user can see suggestions.
  const handleInputChange = (e) => {
    setDisplayCountry(e.target.value);
    onChange(e.target.value);
    setIsOpen(true);
  };

  // When clicking on a country in the list, update the value and close the dropdown.
  const handleCountryClick = (country) => {
    onChange(country);
    setDisplayCountry(country.label);
    setIsOpen(false);
  };

  // Filter the countries based on what the user types.
  // This is a simple case-insensitive substring match.
  const filteredCountries = COUNTRIES.filter((country) =>
    country.label.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className="relative" ref={containerRef}>
      <div className="flex items-center border border-gray-300 rounded-md">
        <input
          type="text"
          value={displayCountry}
          onChange={handleInputChange}
          className="flex-grow p-2 rounded-l-md outline-none text-sm"
          placeholder="Select a country"
          onBlur={onBlur}
        />
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-2 border-l border-gray-300"
        >
          <i className="ri-arrow-down-s-line"></i>
        </button>
      </div>
      {isOpen && (
        <ul className="absolute z-10 max-h-60 overflow-y-auto bg-white border border-gray-300 w-full">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <li
                key={country.value}
                onClick={() => handleCountryClick(country.value)}
                className="cursor-pointer p-2 hover:bg-gray-200 text-sm"
              >
                {country.label}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default CountrySelect;
