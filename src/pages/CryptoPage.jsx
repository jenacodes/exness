import { useState, useEffect } from "react";
import mobile from "../assets/crypto-page-imgs/_exness_cryptocurrencies_header_mobile_.jpg";
import desktop from "../assets/crypto-page-imgs/_exness_cryptocurrencies_header_desktop_.jpg";
import {
  Articles,
  BrokerSection,
  BrokerSectionTexts,
  CryptoPageTable,
  DepositsSecondSection,
  ExnessTeam,
  FaqSection,
  Footer,
  Header,
} from "../components";
import {
  CrptoPageDetails,
  Crypto_Page_Faqs,
  CryptoArticlesData,
  deposit_faq_texts,
} from "../utils/constants";

const CryptoPage = () => {
  const CryptoArticlesheaderDetails = {
    title: `Elevate your crypto trading strategies`,
    subtitle: `Explore crypto trading strategies, analysis and techniques to gain an advantage and stay ahead of the curve with our detailed trading guides.`,
  };

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <Header />
      <ExnessTeam
        headerText={`Trade crypto
           swap-free`}
        paragraph={`Trade popular cryptocurrencies including BTCUSD and ETHUSD, and hold your positions with no overnight charges.`}
        image={width < 750 ? mobile : desktop}
      />
      <DepositsSecondSection
        mainHeading="Open an account and trade crypto"
        mainParagraph=""
        details={CrptoPageDetails}
        imageSrc="src/assets/crypto-page-imgs/crypto_woman_with_laptop.jpg"
      />

      <CryptoPageTable />

      <section className="mx-6 my-16 md:mx-[84px]">
        <div className="xl:max-w-[1280px]">
          <div className="grid md:grid-cols-6 md:gap-12">
            <div className=" md:col-span-2">
              <h2 className="text-4xl leading-12 font-semibold tracking-wider mb-2">
                Crypto market conditions
              </h2>
            </div>
            <div className="md:col-span-4">
              <div className="flex flex-col ">
                <div>
                  <p className="text-lg leading-6 text-gray-500">
                    The crypto market is a digital currency market that uses
                    blockchain technology to create new coins and provide users
                    with secure transactions. Trading crypto derivatives allows
                    you to diversify your online portfolio and capitalize on the
                    movements of cryptocurrency prices, whether they’re rising
                    or falling.
                  </p>
                </div>
                <div className="my-6 py-6 border-t border-t-gray-300 lg:mt-12">
                  <div className="grid gap-2">
                    <h4 className="text-base md:text-2xl leading-6 font-semibold tracking-wider">
                      Crypto trading hours
                    </h4>
                    <p className="text-sm md:text-lg leading-5 mb-3 ">
                      You can trade cryptocurrencies 24/7 except during server
                      maintenance. We will inform you via email when this takes
                      place.
                    </p>
                    <p className="text-sm md:text-lg leading-5 ">
                      The below cryptocurrency pairs have close only mode:
                    </p>
                    <ul className="my-4 pl-10">
                      <li className="list-disc">
                        BTCAUD, BTCJPY, BTCCNH, BTCTHB, BTCZAR: on Sunday from
                        21:35 to 22:05
                      </li>
                      <li className="list-disc">
                        BTCXAU, BTCXAG: Monday - Thursday from 21:58 to 23:01
                      </li>
                    </ul>
                    <p className="text-sm md:text-lg leading-5">
                      All timings are in server time (GMT+0).
                    </p>
                    <p className="text-base md:text-lg leading-5 md:mt-6 mt-4">
                      Learn more about trading hours in our
                      <a href="" className="text-blue-500 hover:underline">
                        Help Center
                      </a>
                    </p>
                  </div>
                  <hr className="border border-gray-100 my-6 " />
                  <div className="grid gap-2">
                    <h4 className="text-sm md:text-lg leading-6 font-semibold tracking-wider">
                      Spreads¹
                    </h4>
                    <p className="text-sm md:text-lg leading-5 mb-4 md:mb-6 ">
                      Spreads are always floating, so the spreads in the table
                      above are yesterday’s averages. For live spreads, please
                      refer to the trading platform.
                    </p>
                  </div>
                  <hr className="border border-gray-100 my-6 " />
                  <div className="grid gap-2">
                    <h4 className="text-sm md:text-lg leading-6 font-semibold tracking-wider">
                      Swap
                    </h4>
                    <p className="text-sm md:text-lg leading-5 ">
                      No swap is charged on cryptocurrency positions.
                    </p>
                  </div>
                  <hr className="border border-gray-100 my-6 " />
                  <div className="grid gap-2">
                    <h4 className="text-sm md:text-lg leading-6 font-semibold tracking-wider">
                      Fixed margin requirements
                    </h4>
                    <p className="text-sm md:text-lg leading-5 ">
                      Margin requirements for all cryptocurrency pairs are
                      fixed, regardless of the leverage you use.
                    </p>
                  </div>

                  <hr className="border border-gray-100 my-6 " />

                  <div className="grid gap-2">
                    <h4 className="text-sm md:text-lg leading-6 font-semibold tracking-wider">
                      Stop level
                    </h4>
                    <p className="text-sm md:text-lg leading-6 mb-4 ">
                      Please note that the stop level values in the table above
                      are subject to change and may not be available for traders
                      using certain high-frequency trading strategies or Expert
                      Advisors.
                    </p>
                  </div>
                  <hr className="border border-gray-100 my-4 md:my-6 " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-6 my-16 md:mx-12 lg:mx-[84px]">
        <div>
          <div className="text-center mb-6 max-w-[312px] lg:max-w-[656px] mx-auto">
            <h2 className="text-3xl md:text-4xl leading-9 font-semibold tracking-wider lg:mb-4">
              Why trade crypto with Exness
            </h2>
            <p className="text-sm lg:text-lg lg:leading-6 leading-5 whitespace-pre-line text-center text-gray-500">
              From Bitcoin to Ethereum, Litecoin, and more, you can trade
              cryptocurrency price movements against the US dollar with
              better-than-market conditions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col rounded-lg p-6 bg-white border border-gray-300">
              <div className="flex justify-end pb-6">
                <div>
                  <img
                    src="https://d33vw3iu5hs0zi.cloudfront.net/media/instant_withdrawals_96c97dca73.svg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg leading-6 font-semibold whitespace-pre-line">
                  Instant withdrawals
                </h3>
                <p className="mt-2">
                  Simplify withdrawals for quick access to your funds. Choose
                  your favorite payment method, make a withdrawal request, and
                  enjoy instant approval.²
                </p>
              </div>
            </div>
            <div className="flex flex-col rounded-lg p-6 bg-white border border-gray-300">
              <div className="flex justify-end pb-6">
                <div>
                  <img
                    src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_swap_free_5ad242f7c9.svg"
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
            <div className="flex flex-col rounded-lg p-6 bg-white border border-gray-300">
              <div className="flex justify-end pb-6">
                <div>
                  <img
                    src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_stop_out_protection_3058b9de65.svg"
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

      <Articles
        articlesData={CryptoArticlesData}
        headerDetails={CryptoArticlesheaderDetails}
      />

      <FaqSection faqs={Crypto_Page_Faqs} />
      <BrokerSection
        heading="Trade 24/7 crypto"
        paragraph="Capitalize on the world's top cryptocurrency pairs."
      />
      <BrokerSectionTexts listItems={deposit_faq_texts} />
      <Footer />
    </div>
  );
};

export default CryptoPage;
