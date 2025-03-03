import { useState } from "react";
import AccountTypeDropdown from "./AccountTypeDropdown";
import { tableDataMapping } from "../../utils/constants";
import TableComponent from "./TableComponent";

const CryptoPageTable = () => {
  // State for the selected account type (default is "Standard")
  const [selectedAccountType, setSelectedAccountType] = useState("Standard");

  // Callback when the dropdown changes.
  const handleSelect = (option) => {
    setSelectedAccountType(option);
  };

  // Use the selected account type to pick the correct table data.
  const tableData =
    tableDataMapping[selectedAccountType] || tableDataMapping.Standard;

  // Array of options for desktop buttons.
  const desktopOptions = ["Standard", "Pro", "Zero", "Spread"];

  return (
    <section className="my-16 mx-6 lg:mx-[84px] lg:my-32">
      <div>
        {/* Section Heading */}
        <div className="text-center mb-6">
          <div className="max-w-[312px] lg:max-w-[656px] mx-auto md:mb-5">
            <h2 className="text-2xl md:text-4xl font-semibold tracking-wider md:tracking-widest leading-9 mb-2 ">
              Crypto market spreads and margin
            </h2>
          </div>
        </div>

        {/* Dropdown for mobile and desktop buttons */}
        <div className="lg:mb-12">
          <AccountTypeDropdown onSelect={handleSelect} />
          {/* Desktop buttons */}
          <div className="min-h-12">
            <div className="hidden md:block ">
              <div className="flex border-b border-b-gray-200">
                {desktopOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedAccountType(option)}
                    tabIndex={1}
                    className={`inline-flex min-h-14 min-w-14 px-4 items-center cursor-pointer transition-colors duration-150   ${
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
        </div>

        <div className="inline-flex items-center justify-center rounded-xl tracking-wider text-white text-[12px] bg-gray-500 h-6 mb-6">
          <span className="px-2 whitespace-nowrap">Market execution</span>
        </div>

        {/* Table Rendering */}
        <div>
          <table className="table border-collapse w-full border-spacing-0">
            <thead>
              <tr>
                <th className="p-4 border-b border-b-black text-left">
                  Symbol
                </th>
                <th className="p-4 text-right text-base leading-5 border-b border-b-black">
                  <div>Avg. spread¹</div>
                  <p className="text-gray-500"> pips</p>
                </th>
                <th className="hidden md:table-cell p-4 text-right text-base leading-5 border-b border-b-black">
                  <div>Commission</div>
                  <p className="text-gray-500">per lot/side</p>
                </th>
                <th className="hidden md:table-cell p-4 text-right text-base leading-5 border-b border-b-black">
                  <div>Margin</div>
                  <p className="text-gray-500"></p>
                </th>
                <th className="hidden md:table-cell p-4 text-right text-base leading-5 border-b border-b-black">
                  <div>Long swap</div>
                  <p className="text-gray-500"> pips</p>
                </th>
                <th className="hidden md:table-cell p-4 text-right text-base leading-5 border-b border-b-black">
                  <div>Short swap</div>
                  <p className="text-gray-500"> pips</p>
                </th>
                <th className="hidden md:table-cell p-4 text-right text-base leading-5 border-b border-b-black">
                  <div>Stop Swap¹</div>
                  <p className="text-gray-500"> pips</p>
                </th>
              </tr>
            </thead>
            <TableComponent data={tableData} />
          </table>
        </div>
      </div>
    </section>
  );
};

export default CryptoPageTable;
