/* eslint-disable react/prop-types */

import { useLocation } from "react-router-dom";

const DemoTradingSteps = ({
  title = "How to open an Exness demo trading account",
  steps = [],
  mobileImage = "src/assets/demotrading-pages-img/sm_exness_demo_how_to_open_demo_account-mobile.jpg",
  desktopImage = "src/assets/demotrading-pages-img/xxl_exness_demo_how_to_open_demo_account_205931d86f.jpg",
}) => {
  const { pathname } = useLocation();
  const isDepositsPage = pathname === "/deposits-and-withdrawals";
  return (
    <section className="mt-16">
      <div>
        <div className="max-w-[312px] md:max-w-[640px] ml-auto mr-auto text-center">
          <h2 className="text-2xl md:text-4xl leading-9 font-semibold mb-2 md:mb-8 tracking-widest md:tracking-wide whitespace-pre-line">
            {title}
          </h2>
        </div>
        <div className="relative px-6 md:px-12 pt-[60%] md:pt-[30%]">
          <div className="absolute left-0 top-0 aspect-auto">
            {/* Mobile Image */}
            <img
              className="block md:hidden"
              src={mobileImage}
              alt="Mobile background"
            />
            {/* Desktop Image */}
            <img
              className="hidden md:block"
              src={desktopImage}
              alt="Desktop background"
            />
          </div>
          <div className="relative z-1 grid md:grid-cols-3 rounded-lg bg-demo-card-gray">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-6 border-b border-b-gray-400 md:border-l border-l-gray-300 md:border-b-0"
              >
                <p className={step.textColor}>{step.number}</p>
                <div className="mt-6">
                  <h4
                    className={`${
                      isDepositsPage
                        ? "text-[23px] leading-6 font-bold"
                        : "text-lg leading-6 font-bold"
                    }`}
                  >
                    {step.heading}
                  </h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoTradingSteps;
