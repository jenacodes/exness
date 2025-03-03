import { useState, useEffect } from "react";
import {
  BrokerSection,
  BrokerSectionTexts,
  DemoTradingSteps,
  DepositsSecondSection,
  ExnessTeam,
  FaqSection,
  Footer,
  Header,
} from "../components";
import desktop from "../assets/deposits-imgs/xxl_exness_deposits_withdrawals_desktop.jpg";
import mobile from "../assets/deposits-imgs/md_exness_deposits_withdrawals_mobile.jpg";
import {
  deposit_faq_texts,
  deposits_faqs,
  Deposits_Steps_Data,
} from "../utils/constants";

const DepositsPage = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />
      <ExnessTeam
        headerText={"Deposits and Withdrawals"}
        paragraph={`Get to know our team of professional traders from around the world
            and learn from their expertise on all things trading and strategy.`}
        image={width < 750 ? mobile : desktop}
      />
      {/* <section className="my-16 mx-6 md:mx-[84px] md:my-32">
        <div className="text-center mb-6 md:mb-12">
          <div className="max-w-[312px] lg:max-w-[656px] ml-auto mr-auto">
            <h2 className="text-3xl leading-9 font-semibold tracking-wider md:tracking-widest md:font-semibold font-poppins mb-2">
              Frictionless experience from the start to finish
            </h2>
            <p className="text-lg leading-5 text-gray-500">
              Benefit from our unrivaled payments ecosystem: seamless deposits
              via global and local payment systems, 24/7 access and hassle-free
              release of funds.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:gap-12 md:grid-cols-2">
          <div className="rounded-lg md:order-1">
            <img
              src="src\assets\deposits-imgs\md_exness_deposits_4516a9f627.jpg"
              alt=""
            />
          </div>
          <div>
            <h4 className="text-[20px] md:text-3xl font-medium tracking-wider md:tracking-wide mb-2 leading-7 md:mt-12">
              Payment methods for your convenience
            </h4>
            <p className="text-gray-500 text-sm md:text-lg">
              Global, local and secure payment methods for seamless deposits and
              withdrawals.
            </p>
            <hr className="border border-gray-100 my-6 md:hidden" />
            <h4 className="text-[20px] md:text-3xl font-medium  tracking-wider md:tracking-wide mb-2  leading-7 mt-6 md:mt-12">
              Your money is yours. Period
            </h4>
            <p className="text-gray-500 text-sm md:text-lg">
              Access your funds any day, any time with our instant withdrawal
              feature.¹
            </p>
            <hr className="border border-gray-100 my-6 md:hidden" />
            <h4 className="text-[20px] md:text-3xl font-medium  tracking-wider md:tracking-wide mb-2 leading-7 mt-6 md:mt-12">
              Forget about withdrawal fees²
            </h4>
            <p className="text-gray-500 text-sm md:text-lg">
              We pay your third-party transaction fees so you don&apos;t have
              to.
            </p>
            <hr className="border border-gray-100 my-6 md:hidden" />
          </div>
        </div>
      </section> */}
      <DepositsSecondSection />

      <section className="mx-6 my-16 md:mx-[84px] md:my-32">
        <div className="xl:max-w-[1280px]">
          <div className="grid md:grid-cols-6 md:gap-12">
            <div className=" md:col-span-2">
              <h2 className="text-3xl leading-9 font-medium tracking-wider mb-2">
                Your money is safe with us
              </h2>
            </div>
            <div className="md:col-span-4">
              <div className="flex flex-col ">
                <div>
                  <p className="text-[16px] leading-5 text-gray-500">
                    As the biggest retail multi-asset broker in the world, we
                    apply multiple layers of security to keep your funds safe
                    and instantly available to you upon request.
                  </p>
                </div>
                <div className="my-6 py-6 border-t border-t-gray-300 lg:mt-12">
                  <div className="grid gap-2 md:grid-cols-2 md:gap-6">
                    <h4 className="text-[16px] md:text-2xl leading-6 font-semibold tracking-widest">
                      Segrated accounts
                    </h4>
                    <p className="text-sm md:text-lg leading-5 ">
                      We keep funds in segregated accounts in multiple tier-1
                      banks to ensure top security and peace of mind.
                    </p>
                  </div>
                  <hr className="border border-gray-100 my-6 " />
                  <div className="grid gap-2 md:grid-cols-2 md:gap-6">
                    <h4 className="text-[16px] md:text-2xl leading-6 font-semibold tracking-widest">
                      Secure withdrawal transactions
                    </h4>
                    <p className="text-sm md:text-lg leading-5 ">
                      Your withdrawals are safe and secure, protected by
                      one-time password verification methods.
                    </p>
                  </div>
                  <hr className="border border-gray-100 my-6 " />
                  <div className="grid gap-2 md:grid-cols-2 md:gap-6">
                    <h4 className="text-[16px] md:text-2xl leading-6 font-semibold tracking-widest">
                      PCI DSS certified
                    </h4>
                    <p className="text-sm md:text-lg leading-5 ">
                      We have successfully passed PCI DSS compliance
                      requirements for cardholder data security.
                    </p>
                  </div>
                  <hr className="border border-gray-100 my-6 " />
                  <div className="grid gap-2 md:grid-cols-2 md:gap-6">
                    <h4 className="text-[16px] md:text-2xl leading-6 font-semibold tracking-widest">
                      3D Secure payments
                    </h4>
                    <p className="text-sm md:text-lg leading-5 ">
                      We provide 3D Secure payments for all major credit cards
                      such as Visa and Mastercard.
                    </p>
                  </div>
                  <hr className="border border-gray-100 my-6 " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="my-16">
        <div className="container">
          <div className="text-center mb-6">
            <div className="max-w-[312px] mx-auto">
              <h2 className="text-2xl tracking-wider font-semibold leading-9">
                Deposit Your funds in 3 easy steps
              </h2>
            </div>
          </div>
          <div className="relative px-6 pt-[58.43%]">
            <div className="absolute top-0 left-0 right-0 overflow-hidden">
              <img
                src="src\assets\deposits-imgs\man-with-phone-mobile.jpg"
                alt=""
              />
            </div>
            <div className="grid z-1 rounded-lg ">
              <div>
                <h2>Step 1</h2>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </section> */}

      <DemoTradingSteps
        title="Deposits Your funds in 3 easy steps"
        steps={Deposits_Steps_Data}
        mobileImage="src\assets\deposits-imgs\man-with-phone-mobile.jpg"
        desktopImage="src\assets\deposits-imgs\man-with-phone-desktop.jpg"
      />

      <FaqSection faqs={deposits_faqs} />
      <BrokerSection
        heading={"Upgrade the way you trade"}
        paragraph="See for yourself why Exness is the broker of choice for over 1 million traders and 64,000 partners."
      />
      <BrokerSectionTexts listItems={deposit_faq_texts} />
      <Footer />
    </>
  );
};

export default DepositsPage;
