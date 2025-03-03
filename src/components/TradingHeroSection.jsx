import Button from "./buttons/Button";
import { useLocation } from "react-router-dom";

const TradingHeroSection = () => {
  const { pathname } = useLocation();
  const isProfessionalAcctsPage = pathname === "/professional-accounts";
  const isDemoTradingAcctsPage = pathname === "/demo-trading-accounts";
  const isSocialTradingAcctsPage = pathname === "/social-trading-accounts";

  return (
    <section className="my-8 mx-6 flex flex-col md:m-12 lg:mx-[84px]">
      <div className="lg:max-w-7xl">
        <div className="">
          {isProfessionalAcctsPage && (
            <div className="lg:w-[656px]">
              <h1 className="text-5xl md:text-6xl leading-12 font-semibold whitespace-pre-line font-poppins tracking-wide md:tracking-wider md:leading-[72px]">
                Professional accounts
              </h1>
              <p className="text-lg leading-6 whitespace-pre-line mt-4">
                Accounts that meet the needs of the most experienced traders.
                Highlights include low spread or spread-free accounts with
                execution to suit scalpers, day-traders and algotraders.
              </p>
            </div>
          )}
          {isDemoTradingAcctsPage && (
            <>
              <div className="flex flex-col md:w-[560px] justify-items-center">
                <h1 className="text-4xl text-center md:text-left md:text-[44px] leading-12 font-semibold whitespace-pre-line font-poppins tracking-wider md:leading-[72px]">
                  Demo trading accounts
                </h1>
                <p className="text-lg leading-6 whitespace-pre-line mt-4 text-center md:text-left">
                  The Exness risk-free demo trading account offers you the
                  benefit of sharpening your trading skills and strategies, as
                  well as mastering Exness’ unique trading tools without
                  financial risk.
                </p>
                <div className="mt-12">
                  <Button text={"Try Free Demo"} />
                </div>
              </div>
            </>
          )}
          {isSocialTradingAcctsPage && (
            <div className="lg:w-[656px]">
              <h1 className="text-5xl md:text-6xl leading-12 font-semibold whitespace-pre-line font-poppins tracking-wide md:tracking-wider md:leading-[72px]">
                Social trading Account
              </h1>
              <p className="text-lg leading-6 whitespace-pre-line mt-4">
                Boost your income by sharing your trading strategies on the
                Exness Social Trading platform. Discover the right account for
                you.
              </p>
            </div>
          )}

          {!isProfessionalAcctsPage &&
            !isDemoTradingAcctsPage &&
            !isSocialTradingAcctsPage && (
              <>
                <div className="lg:w-[656px]">
                  <h1 className="text-5xl md:text-6xl leading-12 font-semibold whitespace-pre-line font-poppins tracking-wide md:tracking-wider md:leading-[72px]">
                    Trading accounts: Standard
                  </h1>
                  <p className="text-lg leading-6 whitespace-pre-line mt-4">
                    Feature-rich, commission-free trading accounts that suit the
                    needs of today’s traders. Sign up and experience the
                    advantages of our most popular account.
                  </p>
                </div>
              </>
            )}
        </div>
      </div>
    </section>
  );
};

export default TradingHeroSection;
