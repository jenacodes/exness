import {
  Header,
  TradingHeroSection,
  TradingAcctsCardsSection,
  TradingTableSection,
  FaqSection,
  BrokerSection,
  BrokerSectionTexts,
  Footer,
} from "../components";
import { Standard_faq_texts, Trading_faqs } from "../utils/constants";

const ProfessionalAcctsPage = () => {
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

export default ProfessionalAcctsPage;
