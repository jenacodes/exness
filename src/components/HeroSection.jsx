import { Link } from "react-router-dom";
import RegisterButton from "./buttons/Button";
import SignInButton from "./buttons/SignInButton";

const HeroSection = () => {
  return (
    <section className="px-6 pt-16 md:section">
      <div className="relative overflow-hidden h-[500px] flex flex-col items-center justify-center py-12 md:py-24">
        <div className="font-poppins relative flex flex-col max-w-[658px] w-full text-center px-4 md:px-20">
          <h1 className="text-3xl sm:text-4xl md:text-6xl leading-tight md:leading-[72px] font-bold text-black tracking-widest text-center whitespace-pre-line">
            Upgrade the way you trade
          </h1>

          <p className="text-base sm:text-lg mt-2.5 mb-12">
            Trade with the world’s largest retail broker and benefit from&nbsp;
            <span className="whitespace-nowrap">
              better-than-market conditions.
            </span>
          </p>
        </div>

        <video
          className="absolute top-0 h-full -z-10 m-0 p-0 overflow-hidden "
          src="/exness_c76dfeb683.webm"
          autoPlay
          loop
          muted
        ></video>
        <div className="flex flex-col items-center md:flex-row gap-2.5">
          <RegisterButton text={"Register"} />
          <Link to={"acctPage/login"}>
            <SignInButton text={"Sign in"} />
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-evenly pt-7 border-t border-gray-600 mb-8 font-poppins">
        <div className="mb-4 md:mb-0">
          <i className="ri-team-fill"></i>
          800,000 Active-class-users
        </div>
        <div className="mb-4 md:mb-0">
          <i className="ri-team-fill"></i>
          Multiple regulatory License
        </div>
        <div className="mb-4 md:mb-0">
          <i className="ri-team-fill"></i>
          24/7 Customer Support
        </div>
        <div>
          <i className="ri-team-fill"></i>
          PCI DSS certified
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
