/* eslint-disable react/prop-types */
import RegisterButton from "./buttons/Button";

const BrokerSection = ({
  backgroundImage = "/Broker Section.jpg",
  heading = "Trade with a trusted Broker today",
  paragraph = "See for yourself why Exness is the broker of choice for over 800,000 traders and 64,000 partners.",
  registerButtonText = "Register",
  demoButtonText = "Try Free Demo",
}) => {
  return (
    <section className="relative px-6 pt-24 box-border lg:pt-36 lg:px-[84px] md:pt-24 md:px-12">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden md:h-[288px] -z-10">
        <img
          src={backgroundImage}
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Card */}
      <div className="relative z-10 bg-custom-blue rounded-[10px] p-6 md:p-8 lg:flex lg:justify-between lg:items-center lg:gap-8 items-center">
        {/* Text Content */}
        <div className="mb-6 lg:mb-0 lg:max-w-[600px]">
          <h2 className="text-3xl font-bold text-white mb-4 md:text-3xl lg:text-4xl text-center md:text-left">
            {heading}
          </h2>
          <p className="text-base text-gray-500 md:text-[18px] leading-6">
            {paragraph}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 lg:shrink-0 justify-center text-center">
          <div>
            <RegisterButton
              className="w-full md:w-auto"
              text={registerButtonText}
            />
          </div>
          <div>
            <button className="px-5 py-2 text-white transition-colors bg-custom-deep-blue rounded-xs cursor-pointer md:w-auto hover:bg-opacity-90">
              {demoButtonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrokerSection;
