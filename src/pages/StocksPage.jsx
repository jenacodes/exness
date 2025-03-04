import { useState, useEffect } from "react";
import {
  DepositsSecondSection,
  ExnessTeam,
  Header,
  MarketsInfoSection,
} from "../components";
import mobile from "../assets/stocks-page-imgs/stocks-hero-mobile.jpg";
import desktop from "../assets/stocks-page-imgs/stocks-hero-desktop.jpg";
import { stocksInfoSectionData, StocksPageDetails } from "../utils/constants";

const StocksPage = () => {
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
    </div>
  );
};

export default StocksPage;
