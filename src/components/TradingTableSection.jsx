import { useLocation } from "react-router-dom";

const TradingTableSection = () => {
  const { pathname } = useLocation();
  const isSocialTradingAcctsPage = pathname === "/social-trading-accounts";
  return (
    <section className="hidden md:block mx-[84px] my-32">
      <div>
        <table className="table border-collapse w-full">
          <thead>
            <tr className="">
              <th className="pl-6 py-4 border-b border-b-gray-300"></th>
              <th className=" py-4 px-4 border-b border-b-gray-300 text-left">
                Standard
              </th>
              {isSocialTradingAcctsPage ? (
                <th className=" px-4 pr-4 border-b border-b-gray-300 text-left">
                  Pro
                </th>
              ) : (
                <th className=" px-4 pr-4 border-b border-b-gray-300 text-left">
                  Standard Cent
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-b-gray-300">
              <td className="px-1.5 py-4 text-lg tracking-wide text-gray-500">
                Minimum deposit
              </td>
              <td className="p-4">10$</td>
              <td className="p-4">10$</td>
            </tr>
            <tr className="border-b border-b-gray-300">
              <td className="px-1.5 py-4 text-lg tracking-wide text-gray-500">
                Spread¹
              </td>
              <td className="p-4">From 0.2 pips</td>
              <td className="p-4">From 0.3 pips</td>
            </tr>
            <tr className="border-b border-b-gray-300">
              <td className="px-1.5 py-4 text-lg tracking-wide text-gray-500">
                Commission
              </td>
              <td className="p-4">No commission</td>
              <td className="p-4">No commission</td>
            </tr>
            <tr className="border-b border-b-gray-300">
              <td className="px-1.5 py-4 text-lg tracking-wide text-gray-500">
                Maximum leverage
              </td>
              <td className="p-4">1:Unlimited</td>
              <td className="p-4">1:Unlimited</td>
            </tr>
            <tr className="border-b border-b-gray-300">
              <td className="px-1.5 py-4 text-lg tracking-wide text-gray-500">
                Instruments
              </td>
              <td className="p-4">
                Forex, metals, cryptocurrencies, energies, stocks, indices
              </td>
              <td className="p-4">Forex, metals</td>
            </tr>
            <tr className="border-b border-b-gray-300">
              <td className="px-1.5 py-4 text-lg tracking-wide text-gray-500">
                Minimum lot size
              </td>
              <td className="p-4">0.01</td>
              <td className="p-4">0.01</td>
            </tr>
            <tr className="border-b border-b-gray-300">
              <td className="px-1.5 py-4 text-lg tracking-wide text-gray-500">
                Maximum lot size
              </td>
              <td className="p-4">
                200 {"(7:00 - 20:59 GMT+0), 60 (21:00 - 6:59 GMT+0)"}
              </td>
              <td className="p-4">200</td>
            </tr>
            <tr className="border-b border-b-gray-300">
              <td className="px-1.5 py-4 text-lg tracking-wide text-gray-500">
                Maximum number of positions
              </td>
              <td className="p-4">Unlimited</td>
              <td className="p-4">1000</td>
            </tr>
            <tr className="border-b border-b-gray-300">
              <td className="px-1.5 py-4 text-lg tracking-wide text-gray-500">
                Hedged margin
              </td>
              <td className="p-4">0%</td>
              <td className="p-4">0%</td>
            </tr>
            <tr className="border-b border-b-gray-300">
              <td className="px-1.5 py-4 text-lg tracking-wide text-gray-500">
                Margin call
              </td>
              <td className="p-4">60%</td>
              <td className="p-4">60%</td>
            </tr>
            <tr className="border-b border-b-gray-300">
              <td className="px-1.5 py-4 text-lg tracking-wide text-gray-500">
                Stop out
              </td>
              <td className="p-4">
                0{" "}
                <a href="" className="text-blue-400">
                  (see more details about stocks)
                </a>
              </td>
              <td className="p-4">0%</td>
            </tr>
            <tr className="border-b border-b-gray-300">
              <td className="px-1.5 py-4 text-lg tracking-wide text-gray-500">
                Order execution
              </td>
              <td className="p-4">Market</td>
              <td className="p-4">Market</td>
            </tr>
            <tr className="border-b border-b-gray-300">
              <td className="px-1.5 py-4 text-lg tracking-wide text-gray-500">
                Swap-free
              </td>
              <td className="p-4">Available</td>
              <td className="p-4">Available</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TradingTableSection;
