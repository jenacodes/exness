import mobile from "../assets/crypto-page-imgs/_exness_cryptocurrencies_header_mobile_.jpg";
import desktop from "../assets/crypto-page-imgs/_exness_cryptocurrencies_header_desktop_.jpg";
import useWindowWidth from "../components/UseWindowWidth";
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
  MarketsInfoCardsSection,
  MarketsInfoSection,
} from "../components";

import {
  CrptoPageDetails,
  Crypto_Page_Faqs,
  CryptoArticlesData,
  cryptoInfoSectionData,
  deposit_faq_texts,
} from "../utils/constants";
import { cryptoCards } from "../constants/Markets-section-details/crypto-page";

const CryptoPage = () => {
  const CryptoArticlesheaderDetails = {
    title: `Elevate your crypto trading strategies`,
    subtitle: `Explore crypto trading strategies, analysis and techniques to gain an advantage and stay ahead of the curve with our detailed trading guides.`,
  };

  const width = useWindowWidth();
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

      <MarketsInfoCardsSection
        title={"Why trade crypto with Exness"}
        description={
          "From Bitcoin to Ethereum, Litecoin, and more, you can trade cryptocurrency price movements against the US dollar with better-than-market conditions."
        }
        cards={cryptoCards}
      />

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
