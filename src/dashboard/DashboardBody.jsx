import { useState } from "react";
import { AccountTypeDropdown, ToggleButton } from "../components";

const DashboardBody = () => {
  const [selectedAccountType, setSelectedAccountType] = useState("Real");

  //   // Callback when the dropdown changes.
  //   const handleSelect = (option) => {
  //     setSelectedAccountType(option);
  //   };

  const desktopOptions = ["Real", "Demo", "Archived"];
  return (
    <div className="px-4 mt-4 lg:mt-10 flex flex-col w-full lg:pl-28 lg:pr-10">
      <div>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 items-start">
          <h2 className="text-black text-4xl font-bold">My accounts</h2>
          <div>
            <button className="inline-flex justify-center items-center cursor-pointer bg-gray-100 min-w-20 min-h-10 py-1.5 px-5">
              + Open new account
            </button>
          </div>
        </div>
        <div className="min-h-12 mb-6">
          <div className="block">
            <div className="flex border-b border-b-gray-200">
              {desktopOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedAccountType(option)}
                  tabIndex={1}
                  className={`inline-flex min-h-14 px-4 items-center cursor-pointer transition-colors duration-150   ${
                    selectedAccountType === option
                      ? "border-b-3 border-black text-black"
                      : "hover:border-b-black text-gray-500"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <AccountTypeDropdown
            options={["Newest", "Premium", "Enterprise"]}
            defaultOption="Newest"
          />
          <ToggleButton />
        </div>
      </div>
    </div>
  );
};

export default DashboardBody;
