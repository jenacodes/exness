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
  MarketsInfoSection,
} from "../components";

import {
  CrptoPageDetails,
  Crypto_Page_Faqs,
  CryptoArticlesData,
  cryptoInfoSectionData,
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

      <MarketsInfoSection
        header={cryptoInfoSectionData.header}
        description={cryptoInfoSectionData.description}
        subsections={cryptoInfoSectionData.subsections}
      />

      <section className="mx-6 my-16 md:mx-12 md:mb-20 md:mt-0 lg:mx-[84px]">
        <div>
          <div className="text-center mb-6 max-w-[312px] md:max-w-[640px] lg:max-w-[656px] mx-auto">
            <h2 className="text-3xl md:text-4xl leading-9 font-semibold tracking-wider lg:mb-4">
              Why trade crypto with Exness
            </h2>
            <p className="text-sm lg:text-lg lg:leading-6 leading-5 whitespace-pre-line text-center text-gray-500">
              From Bitcoin to Ethereum, Litecoin, and more, you can trade
              cryptocurrency price movements against the US dollar with
              better-than-market conditions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
