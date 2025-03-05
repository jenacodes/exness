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
import desktop from "../assets/forex-page-imgs/hero-section-desktop.jpg";
import mobile from "../assets/forex-page-imgs/hero-section-mobile.jpg";
import useWindowWidth from "../components/UseWindowWidth";
import {
  forexArticleCards,
  forexInfoSectionData,
  ForexPageDetails,
} from "../constants/Markets-section-details/forex-page";
import { forexArticlesData } from "../constants/articles/forex-articles";
import { ForexPageFaqs } from "../constants/faqs/forex-faqs";
import { deposit_faq_texts } from "../utils/constants";

const ForexPage = () => {
  const forexArticlesheaderDetails = {
    title: `Master the art of forex trading`,
    subtitle: `Check out our detailed trading guides designed to help you navigate through the complexities of the forex market and unlock the secrets of currency trading. Leverage in forex – how to use it wisely`,
  };
  const width = useWindowWidth();
  return (
    <div>
      <Header />
      <ExnessTeam
        headerText={`Forex trading
                    with low and stable spreads¹`}
        paragraph={`Access the global forex market and trade the world’s most popular currency pairs with better-than-market conditions.`}
        image={width < 750 ? mobile : desktop}
      />
      <DepositsSecondSection
        details={ForexPageDetails}
        imageSrc="src\assets\forex-page-imgs\man-with-laptop.jpg"
        mainHeading="Capitalize on currency pair price movements"
        mainParagraph=""
      />
      <MarketsInfoSection
        description={forexInfoSectionData.description}
        header={forexInfoSectionData.header}
        subsections={forexInfoSectionData.subsections}
      />

      <MarketsInfoCardsSection
        title={"Why trade forex market with Exness"}
        description="Take the currency market by storm and trade currencies on award-winning Forex trading platforms."
        cards={forexArticleCards}
      />
      <Articles
        headerDetails={forexArticlesheaderDetails}
        articlesData={forexArticlesData}
      />
      <FaqSection faqs={ForexPageFaqs} />
      <BrokerSection
        heading="Trade forex"
        paragraph="Tap into the world's financial market"
      />
      <BrokerSectionTexts listItems={deposit_faq_texts} />
      <Footer />
    </div>
  );
};

export default ForexPage;
