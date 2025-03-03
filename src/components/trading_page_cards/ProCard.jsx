import Button from "../buttons/Button";

const ProCard = ({ isOpen, toggleDetailsHandler }) => {
  return (
    <div className="border border-gray-300 flex flex-col">
      <div className="p-6 flex flex-col justify-between ">
        <div>
          <h3 className="text-xl md:text-2xl leading-7 mb-2 flex items-center whitespace-pre-line font-semibold gap-2 tracking-wide md:tracking-wider">
            Pro
          </h3>
          <p className="font-medium leading-4 tracking-wider">
            Our instant execution account, with zero commission & low spread.
          </p>
        </div>
        <hr className="border-gray-300 mt-10" />
      </div>
      <div className="flex flex-col justify-between px-6 pb-6">
        <div className="flex flex-col gap-4 transition duration-300">
          <div>
            <div className="text-sm leading-[18px] whitespace-pre-line font-normal text-gray-400">
              Minimum Deposit
            </div>
            <p className="text-[16px] leading-5 whitespace-pre-line">500$</p>
          </div>
          <div>
            <div className="text-sm leading-[18px] whitespace-pre-line font-normal text-gray-400">
              Spread¹
            </div>
            <p className="text-[16px] leading-5 whitespace-pre-line">
              From the 0.2 pips
            </p>
          </div>
          <div>
            <div className="text-sm leading-[18px] whitespace-pre-line font-normal text-gray-400">
              Commission
            </div>
            <p className="text-[16px] leading-5 whitespace-pre-line">
              No Commission
            </p>
          </div>
          <div>
            <div className="text-sm leading-[18px] whitespace-pre-line font-normal text-gray-400">
              Maximum Leverage
            </div>
            <p className="text-[16px] leading-5 whitespace-pre-line">
              1:Unlimited
            </p>
          </div>
          <div>
            <div className="text-sm leading-[18px] whitespace-pre-line font-normal text-gray-400">
              Instruments
            </div>
            <p className="text-[16px] leading-5 whitespace-pre-line">
              Forex, metals, cryptocurrencies, energies, stocks, indices
            </p>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-4">
              <div>
                <div className="text-[12px] leading-[18px] whitespace-pre-line font-normal text-gray-400">
                  Minimum lot size
                </div>
                <p className="text-sm leading-5 whitespace-pre-line">0.01</p>
              </div>
              <div>
                <div className="text-[12px] leading-[18px] whitespace-pre-line font-normal text-gray-400">
                  Maximum lot size
                </div>
                <p className="text-sm leading-5 whitespace-pre-line">200</p>
              </div>
              <div>
                <div className="text-[12px] leading-[18px] whitespace-pre-line font-normal text-gray-400">
                  Maximum number of positions
                </div>
                <p className="text-sm leading-5 whitespace-pre-line">1000</p>
              </div>
              <div>
                <div className="text-[12px] leading-[18px] whitespace-pre-line font-normal text-gray-400">
                  Hedged margin
                </div>
                <p className="text-sm leading-5 whitespace-pre-line">0%</p>
              </div>
              <div>
                <div className="text-[12px] leading-[18px] whitespace-pre-line font-normal text-gray-400">
                  Margin Call
                </div>
                <p className="text-sm leading-5 whitespace-pre-line">60%</p>
              </div>
              <div>
                <div className="text-[12px] leading-[18px] whitespace-pre-line font-normal text-gray-400">
                  Stop Out
                </div>
                <p className="text-sm leading-5 whitespace-pre-line">0%</p>
              </div>
              <div>
                <div className="text-[12px] leading-[18px] whitespace-pre-line font-normal text-gray-400">
                  Order execution
                </div>
                <p className="text-sm leading-5 whitespace-pre-line">Market</p>
              </div>
              <div>
                <div className="text-[12px] leading-[18px] whitespace-pre-line font-normal text-gray-400">
                  Swap-free
                </div>
                <p className="text-sm leading-5 whitespace-pre-line">
                  Available
                </p>
              </div>
            </div>
          </div>

          <button
            className=" text-center cursor-pointer hover:underline mt-2 flex items-center justify-center gap-1 md:hidden"
            onClick={toggleDetailsHandler}
          >
            {isOpen ? "see less details" : "see more details"}
            {isOpen ? (
              <i className="ri-arrow-up-s-line"></i>
            ) : (
              <i className="ri-arrow-down-s-line"></i>
            )}
          </button>
        </div>
        <div className="mt-6 flex justify-center">
          <Button text={"Register"} />
        </div>
      </div>
    </div>
  );
};

export default ProCard;
