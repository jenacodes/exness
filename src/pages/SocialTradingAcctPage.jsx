import {
  Header,
  TradingHeroSection,
  TradingAcctsCardsSection,
  TradingTableSection,
  BrokerSectionTexts,
  Footer,
} from "../components";
import { Home_Broker_texts } from "../utils/constants";

const SocialTradingAcctPage = () => {
  return (
    <div>
      <Header />
      <TradingHeroSection />
      <TradingAcctsCardsSection />
      <section className="mx-6 my-16">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]">
            <div className="text-center p-6 md:py-12 md:px-6">
              <h3 className="mb-1.5 font-semibold tracking-widest text-lg">
                Solutions
              </h3>
              <p>
                Discover our{" "}
                <a href="" className="text-blue-500">
                  Exness Social Trading platform
                </a>
                , attract investors and boost your income.
              </p>
            </div>
            <div className="border-b border-b-gray-300 md:border-b-0 border-l md:border-l-gray-300 md:mx-12 w-auto"></div>
            <div className="text-center p-6 md:py-12 md:px-6">
              <h3 className="mb-1.5 font-semibold tracking-widest text-lg leading-9">
                Instruments
              </h3>
              <p>
                Discover our{" "}
                <a href="" className="text-blue-500">
                  Exness Social Trading platform
                </a>
                , attract investors and boost your income.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TradingTableSection />

      <BrokerSectionTexts listItems={Home_Broker_texts} />
      <Footer />
    </div>
  );
};

export default SocialTradingAcctPage;
