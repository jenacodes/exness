import {
  Footer,
  Header,
  About,
  Thrive,
  Opportunity,
  Security,
  ExnessTeam,
  Articles,
  BrokerSection,
  BrokerSectionTexts,
} from "../../components";

import desktop from "/xxl_exness_team_pro_new_header_desktop_db7b16c370.jpg";
import mobile from "/sm_exness_team_pro_new_header_mobile.jpg";
import { Home_Broker_texts } from "../../utils/constants";

const Home = () => {
  const width = window.innerWidth;
  return (
    <section className="home_page">
      <Header />
      <About />
      <Thrive />
      <Opportunity />
      <Security />
      <ExnessTeam
        image={width > 750 ? desktop : mobile}
        headerText={`Exness Team Pro`}
        paragraph={`Get to know our team of professional traders from around the world and learn from their expertise on all things trading and strategy.`}
      />
      <Articles />
      <BrokerSection />
      <BrokerSectionTexts listItems={Home_Broker_texts} />
      <Footer />
    </section>
  );
};

export default Home;
