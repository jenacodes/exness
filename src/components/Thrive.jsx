import RegisterButton from "./buttons/Button";

const Thrive = () => {
  return (
    <section className="px-6 pt-16 bg-custom-blue lg:pt-32">
      <div className="lg:mx-[84px] border-b border-b-gray-700 md:border-hidden">
        <div className="mb-12">
          <h1 className="text-4xl text-center text-white md:text-5xl">
            Thrive in the gold & oil market
          </h1>
          <p className="text-center text-gray-500 md:text-lg">
            Trading conditions can make or break a strategy, thats why you need
            the best
          </p>
        </div>

        {/* Grid: Mobile-first columns (1 → 3 columns on medium screens) */}
        <div className="grid items-center gap-6 mb-12 md:grid-cols-3">
          {/* Left Column */}
          <div className="grid gap-6 md:gap-12">
            <div className="flex flex-col items-center text-center">
              <span className="px-2 mb-4 text-white bg-gray-600">
                Withdrawals
              </span>
              <h4 className="font-bold text-white">Instant Withdrawals</h4>
              <p className="mt-2 text-gray-500">
                Get your deposits and withdrawals approved the moment you click
                the button.¹
              </p>
            </div>
            {/* Add more items here */}
          </div>

          {/* Center Image */}
          <div className="max-w-md mx-auto">
            <img
              src="\xl_trade_without_tradeoffs_sm_454bd5e843.jpg"
              alt="Trading platform"
              className="w-full h-auto"
            />
          </div>

          {/* Right Column */}
          <div className="grid gap-6 md:gap-12">
            <div className="flex flex-col items-center text-center">
              <span className="px-2 mb-4 text-white bg-gray-600">
                Withdrawals
              </span>
              <h4 className="font-bold text-white">Instant Withdrawals</h4>
              <p className="mt-2 text-gray-500">
                Get your deposits and withdrawals approved the moment you click
                the button.¹
              </p>
            </div>
            {/* Add more items here */}
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <section className="box-border pt-8 pb-16 md:pt-16 md:pb-32 lg:pb-32 bg-custom-blue md:px-[84px]">
        <div className="mb-12">
          <h1 className="text-4xl text-center text-white md:text-5xl">
            Trade Assets from global Marketers
          </h1>
          <p className="text-center text-gray-500 md:text-lg">
            Capitalize on every opportunity with the world’s most popular
            assets.
          </p>
        </div>

        {/* Table Section */}
        <table className="w-full border-collapse table">
          <thead>
            <tr>
              <th className="p-4 text-left text-gray-500 border-b font-bold border-underline-bottom-color">
                Instruments
              </th>
              <th className="hidden p-4 text-left text-gray-500 border-b md:table-cell font-bold border-underline-bottom-color">
                Leverage
              </th>
              <th className="p-4 text-sm text-left text-gray-500 border-b font-bold border-underline-bottom-color">
                Avg. spread³, pips
              </th>
              <th className="hidden p-4 text-left text-gray-500 border-b md:table-cell font-bold border-underline-bottom-color">
                Swap- Free
              </th>
              <th className="p-4 text-left text-gray-500 border-b font-bold border-underline-bottom-color"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row align-middle">
              <td className="px-4 py-4 tracking-wide border-b font-normal border-underline-bottom-color">
                <div className="flex items-center gap-2">
                  <img
                    src="\XAUUSD_64f4c10126.png"
                    alt="Instrument"
                    className="w-8 h-8"
                  />
                  <div>
                    <p className="font-bold text-white">XAUSSD</p>
                    <p className="text-gray-500 hidden md:block">
                      Gold vs US Dollar
                    </p>
                  </div>
                </div>
              </td>
              <td className="hidden px-4 py-4 tracking-wide border-b md:table-cell font-normal border-underline-bottom-color">
                <p className="font-bold text-white">Customized</p>
              </td>
              <td className="px-4 py-4 tracking-wide border-b font-normal border-underline-bottom-color">
                <p className="font-bold text-white">11.2</p>
              </td>
              <td className="hidden px-4 py-4 tracking-wide border-b md:table-cell font-normal border-underline-bottom-color">
                <p className="font-bold text-white">Availiable</p>
              </td>
              <td className="px-4 py-4 tracking-wide border-b font-normal border-underline-bottom-color">
                <a
                  href=""
                  className="text-[16px] font-bold leading-5 text-gray-500 hover:text-white hover:underline"
                >
                  Metals {">"}
                </a>
              </td>
            </tr>
            {/* Add more rows */}
          </tbody>
        </table>

        {/* Buttons: Stack on mobile → row on medium+ */}
        <div className="flex flex-col items-center justify-center gap-4 mt-12 md:flex-row md:gap-6">
          <RegisterButton text={"Register"} />
          <button className="px-5 py-2 text-white rounded-xs cursor-pointer bg-custom-deep-blue">
            Try Free demo
          </button>
        </div>
      </section>
    </section>
  );
};

export default Thrive;
