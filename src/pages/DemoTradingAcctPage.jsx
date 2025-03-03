import {
  Button,
  Header,
  FaqSection,
  TradingHeroSection,
  BrokerSection,
  Footer,
  DemoTradingSteps,
} from "../components";
import { Demo_Trading_faqs, Demo_Trading_Steps } from "../utils/constants";

const DemoTradingAcctPage = () => {
  return (
    <div>
      <Header />
      <TradingHeroSection />

      <section className="relative mx-6 my-16 md:mx-12 md:my-20 lg:mx-[84px]">
        <div className="">
          <div className="text-center mb-6 md:mb-12">
            <div className="max-w-xs md:max-w-[656px] ml-auto mr-auto md:">
              <h2 className="text-2xl md:text-4xl leading-9 font-semibold whitespace-pre-line mb-2 tracking-wider">
                Benefits of using an Exness demo trading account
              </h2>
              <p className="text-[16px] leading-5 whitespace-pre-line text-gray-400">
                Our demo trading account can be your “secret weapon” to test out
                strategies and hone your skills with zero risk. Here’s how
                you’ll benefit:
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 relative">
            <div className="flex flex-col rounded-lg bg-light-gray">
              <div className="relative top-0 z-1 p-6">
                <h3 className="text-xl leading-5 tracking-wider font-semibold mb-1">
                  Risk-free Practice
                </h3>
                <p>
                  Learn to trade without financial risk, refining strategies and
                  learning from mistakes
                </p>
              </div>
              <div className="relative">
                <img
                  src="src\assets\demotrading-pages-img\xl_visual_91ae69c1ed.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col rounded-lg relative">
              <div className="absolute md:relative z-1 p-6 text-white">
                <h3 className="text-xl leading-5 tracking-wider font-semibold mb-1">
                  Skill development
                </h3>
                <p className="">
                  Home trading abilities from market analysis to decision-making
                </p>
              </div>
              <div className="relative md:absolute h-full w-full">
                <div className="h-full overflow-hidden">
                  <img
                    src="src\assets\demotrading-pages-img\xxl_demo_benefit_2_40d57ae9a7.jpg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg bg-light-gray">
              <div className="relative top-0 z-1 p-6">
                <h3 className="text-xl leading-5 tracking-wider font-semibold mb-1">
                  Strategy testing
                </h3>
                <p>
                  Experiment with various strategies in real market conditions
                </p>
              </div>
              <div className="relative">
                <img
                  src="src\assets\demotrading-pages-img\strategy.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col rounded-lg relative">
              <div className="absolute md:relative z-1 p-6 text-white">
                <h3 className="text-xl leading-5 tracking-wider font-semibold mb-1">
                  Platform Orientation
                </h3>
                <p className="">
                  Get comfortable with trading platforms and tools
                </p>
              </div>
              <div className="relative md:absolute h-full w-full">
                <div className="h-full overflow-hidden">
                  <img
                    src="src\assets\demotrading-pages-img\platform.jpg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        {/* Desktop Version: Only visible on md and up */}
        <div className="hidden md:block relative">
          <img
            src="/xxl_exness_demo_background_Page.jpg"
            alt="Desktop background"
            className="w-full h-full object-cover"
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center md:px-12 md:py-20 lg:py-32 lg:px-[84px] text-white z-10">
            <div className="w-[656px]">
              <h2 className="text-6xl leading-12 lg:font-extrabold md:tracking-wider">
                Explore Exness assets and markets
              </h2>
              <p className="text-lg leading-6 mt-4">
                Learn to trade with our various assets from leading global
                financial markets with the same conditions as on live trading
                accounts.
              </p>
              <div className="mt-8">
                <Button text={"Try Free Demo"} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Version: Visible on screens smaller than md */}
        <div className="block md:hidden">
          <div className="z-10 md:py-32 md:px-[84px]">
            <div className="bg-dark-blue text-white px-6 py-16 border border-dark-blue">
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-12 font-medium md:tracking-wider">
                Explore Exness assets and markets
              </h2>
              <p className="text-lg leading-6 mt-4">
                Learn to trade with our various assets from leading global
                financial markets with the same conditions as on live trading
                accounts.
              </p>
              <div className="mt-8">
                <Button text={"Try Free Demo"} />
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="block"
              src="src\assets\demotrading-pages-img\demo background for mobile.jpg"
              alt="Mobile background"
            />
          </div>
        </div>
      </section>

      <section className="mx-6 my-16 md:mx-12 md:my-20 lg:mx-[84px]">
        <div>
          <div className="text-center mb-6">
            <h2 className="text-3xl leading-9 font-semibold tracking-wide">
              Hone Your skills at home or at the go
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col rounded-lg p-6 bg-light-gray">
              <div className="flex justify-end pb-6">
                <div>
                  <img
                    src="https://d33vw3iu5hs0zi.cloudfront.net/media/demo_card_1_e35ffe3cfb.svg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg leading-6 font-semibold whitespace-pre-line">
                  Desktop & web platforms
                </h3>
                <p className="mt-2">
                  Explore our wide range of platforms such as MetaTrader 4 and
                  Metatrader 5, Metatrader WebTerminal, and the Exness Terminal
                  to hone your demo trading skills.
                </p>
              </div>
            </div>
            <div className="flex flex-col rounded-lg p-6 bg-light-gray">
              <div className="flex justify-end pb-6">
                <div>
                  <img
                    src="https://d33vw3iu5hs0zi.cloudfront.net/media/demo_card_2_991157512f.svg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg leading-6 font-semibold whitespace-pre-line">
                  Mobile platforms
                </h3>
                <p className="mt-2">
                  Whether you prefer the MetaTrader mobile app or Exness Trade
                  App, your demo trading experience is streamlined and efficient
                  with all the Exness benefits and features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoTradingSteps steps={Demo_Trading_Steps} />

      <FaqSection faqs={Demo_Trading_faqs} />
      <BrokerSection />
      <Footer />
    </div>
  );
};

export default DemoTradingAcctPage;
