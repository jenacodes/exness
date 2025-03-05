import {
  Articles,
  BrokerSection,
  BrokerSectionTexts,
  DepositsSecondSection,
  ExnessTeam,
  FaqSection,
  Footer,
  Header,
  MarketsInfoCardsSection,
  MarketsInfoSection,
} from "../components";
import mobile from "../assets/stocks-page-imgs/stocks-hero-mobile.jpg";
import useWindowWidth from "../components/UseWindowWidth";
import desktop from "../assets/stocks-page-imgs/stocks-hero-desktop.jpg";
import {
  stocksCards,
  stocksInfoSectionData,
  StocksPageDetails,
} from "../constants/Markets-section-details/stocks-page";

import { stocksArticlesData } from "../constants/articles/stocks-articles";
import { stocks_Page_Faqs } from "../constants/faqs/stocks-faqs";
import { deposit_faq_texts } from "../utils/constants";

const StocksPage = () => {
  const stocksArticlesheaderDetails = {
    title: `Gain new perspectives on trading stocks`,
    subtitle: `Arm yourself with cutting-edge knowledge, revolutionize your trading strategies and navigate the stock market with prowess.`,
  };
  const width = useWindowWidth();
  return (
    <div>
      <Header />
      <ExnessTeam
        headerText={`Trade stocks
                        with zero commission`}
        paragraph={`Trade stocks of the biggest names in the international stock market with low transaction costs.`}
        image={width < 750 ? mobile : desktop}
      />
      <DepositsSecondSection
        details={StocksPageDetails}
        imageSrc="src\assets\stocks-page-imgs\stocks-woman-with-laptop.jpg"
        mainHeading="Open an account and trade stocks"
        mainParagraph=""
      />
      <MarketsInfoSection
        description={stocksInfoSectionData.description}
        header={stocksInfoSectionData.header}
        subsections={stocksInfoSectionData.subsections}
      />
      <MarketsInfoCardsSection
        title={"Why trade stocks with Exness"}
        description={
          "From Big Tech to Big Pharma and more, trade stocks from large-cap companies in the global stock market with conditions designed to empower your strategy."
        }
        cards={stocksCards}
      />
      <Articles
        headerDetails={stocksArticlesheaderDetails}
        articlesData={stocksArticlesData}
        key={stocksArticlesData.id}
      />

      <BrokerSection
        heading="Trade 24/7 stocks"
        paragraph="Invest in the biggest names in tech and industry."
      />
      <FaqSection faqs={stocks_Page_Faqs} />
      <BrokerSectionTexts listItems={deposit_faq_texts} />
      <Footer />
    </div>
  );
};

export default StocksPage;
