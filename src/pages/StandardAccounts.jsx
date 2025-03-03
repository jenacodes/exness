import {
  BrokerSection,
  BrokerSectionTexts,
  Footer,
  Header,
  TradingAcctsCardsSection,
  FaqSection,
  TradingHeroSection,
  TradingTableSection,
} from "../components";
import { Standard_faq_texts, Trading_faqs } from "../utils/constants";

const StandardAccounts = () => {
  return (
    <div>
      <Header />
      <TradingHeroSection />
      <TradingAcctsCardsSection />
      <TradingTableSection />
      <FaqSection faqs={Trading_faqs} />
      <BrokerSection />
      <BrokerSectionTexts listItems={Standard_faq_texts} />
      <Footer />
    </div>
  );
};

export default StandardAccounts;
