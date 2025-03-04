const Opportunity = () => {
  return (
    <section className="mx-6 md:mx-[84px] mt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="">
          <img
            src="\xl_exness_trading_apps_eaab53405d.jpg"
            alt=""
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="grid gap-12">
          <div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img
                src="\exness_opportunity_c200c48704.svg"
                alt=""
                className="w-20 h-20 mb-6"
              />
              <h2 className="text-4xl mb-4">Seize every opportunity</h2>
            </div>
            <div className="text-left">
              <p className="">
                Trade online anytime, anywhere. On web, mobile and desktop.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <a
                href=""
                className="text-gray-500 hover:underline hover:text-black "
              >
                Meta Trader 5 {">"}
              </a>
            </div>
            <div>
              <a
                href=""
                className="text-gray-500 hover:underline hover:text-black "
              >
                Exness Terminal {">"}
              </a>
            </div>
            <div>
              <a
                href=""
                className="text-gray-500 hover:underline hover:text-black "
              >
                Exness Trade App {">"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
