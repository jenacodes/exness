import {
  AboutUsImageTextSection,
  BrokerSection,
  BrokerSectionTexts,
  ExnessTeam,
  Footer,
  Header,
} from "../components";
import useWindowWidth from "../components/UseWindowWidth";
import mobile from "../assets/about-us-imgs/about_us_header_mobile_25d78503bc.jpg";
import desktop from "../assets/about-us-imgs/xxl_exness_about_us_header_desktop_e67c2d3f6f.jpg";
import { deposit_faq_texts, sectionContent } from "../utils/constants";

const AboutUs = () => {
  const width = useWindowWidth();
  return (
    <div>
      <Header />
      <ExnessTeam
        image={width < 750 ? mobile : desktop}
        headerText={`This is Exness`}
        paragraph={`Exness is a multi-asset, tech-focused broker utilizing advanced algorithms for enhanced trading conditions.`}
      />
      <AboutUsImageTextSection
        imageSrc={
          "src/assets/about-us-imgs/about_the_exness_way_is_about_balance_.jpg"
        }
        imageAlt={"Exness balance illustration"}
        title={"The Exness Way is about balance"}
        paragraphs={sectionContent.firstSectionParagraph}
      />
      <section className="">
        <div className="bg-custom-blue grid grid-cols-1 lg:grid-cols-2">
          <div className="order-1">
            <img
              src="src\assets\about-us-imgs\xxl_about_quote_banner.jpg"
              alt=""
              className="h-full"
            />
          </div>
          <div className="flex flex-col gap-6 px-6 py-8 lg:p-[84px] text-white">
            <div className="flex flex-col gap-4">
              <i className="ri-double-quotes-l text-yellow-300 text-4xl"></i>
              <h2 className="text-3xl font-bold ">
                As a team of financial engineers, we created an environment
                where traders can feel secure and empowered.
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold leading-6 ">Petr Valov</p>
              <p className="text-sm">CEO and Founder</p>
            </div>
          </div>
        </div>
      </section>
      <AboutUsImageTextSection
        imageSrc={"src/assets/about-us-imgs/xl_exness_about_people.jpg"}
        title={"People First"}
        paragraphs={sectionContent.thirdSectionParagraph}
      />
      <section className="mx-6 my-16 lg:mx-[84px] lg:my-32">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-4 tracking-wider">
            <div className="text-center lg:text-left p-6 border-l border-l-gray-300">
              <h2 className="text-2xl lg:text-3xl leading-8 font-semibold inline-block">
                2000+
              </h2>
              <p className="text-sm leading-5 whitespace-pre-line">Employees</p>
            </div>
            <div className="text-center lg:text-left p-6 border-l border-l-gray-300">
              <h2 className="text-2xl lg:text-3xl leading-8 font-semibold inline-block">
                13 offices
              </h2>
              <p className="text-sm leading-5 whitespace-pre-line">Globally</p>
            </div>
            <div className="text-center lg:text-left p-6 border-l border-l-gray-300">
              <h2 className="text-2xl lg:text-3xl leading-8 font-semibold inline-block">
                98
              </h2>
              <p className="text-sm leading-5 whitespace-pre-line">
                Nationalities
              </p>
            </div>
            <div className="text-center lg:text-left p-6 border-l border-l-gray-300">
              <h2 className="text-2xl lg:text-3xl leading-8 font-semibold inline-block">
                5
              </h2>
              <p className="text-sm leading-5 whitespace-pre-line">
                Continents
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-6 my-16">
        <div>
          <div className="text-center mb-6">
            <div className="max-w-[312px] mx-auto ">
              <h2 className="text-[28px] tracking-wider leading-6 font-semibold mb-2">
                Our values guide every advancement
              </h2>
              <p className="text-base leading-5 whitespace-pre-line text-gray-500 ">
                From business strategy to employee care, every step we take
                follows
              </p>
              <span className="text-gray-500">our 4 key values</span>
            </div>
          </div>
          <div>
            <div className="py-6 border-t border-t-gray-300">
              <h3 className="text-base leading-6 font-semibold">Bold</h3>
              <p className="mt-6">
                We have innovated, pushed boundaries, and challenged the status
                quo from day one. We follow a simple idea: if it doesn’t exist,
                we invent it. If it does exist, we improve it.
              </p>
            </div>
            <div className="py-6 border-t border-t-gray-300">
              <h3 className="text-base leading-6 font-semibold">Good people</h3>
              <p className="mt-6">
                We prioritize our clients, making sure all our innovations are
                influenced by our desire to give them the best trading
                experience possible.
              </p>
            </div>
            <div className="py-6 border-t border-t-gray-300">
              <h3 className="text-base leading-6 font-semibold">
                Tech professionals
              </h3>
              <p className="mt-6">
                We are science-driven, using sophisticated models and data in
                everything we do to keep our clients protected and offer them
                better-than-market conditions.
              </p>
            </div>
            <div className="py-6 border-t border-t-gray-300">
              <h3 className="text-base leading-6 font-semibold">Reliable</h3>
              <p className="mt-6">
                We prioritize reliability in our platform, giving us a solid
                foundation on which to innovate. Stable spreads, fast,
                execution, and other client-centered benefits, make trading with
                Exness more dependable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BrokerSection
        paragraph="Are you up for a real challenge? Apply to join our talented engineers, programmers, marketers, and thought leaders and reshape how trading will look like tomorrow."
        heading="Shape the future of online trading"
        registerButtonText="View Careers"
        demoButtonText=""
      />
      <BrokerSectionTexts listItems={deposit_faq_texts} />
      <Footer />
    </div>
  );
};

export default AboutUs;
