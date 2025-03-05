/* eslint-disable react/prop-types */
import RegisterButton from "./buttons/Button";
import { useLocation } from "react-router-dom";
import SignInButton from "./buttons/SignInButton";
import TransparentButton from "./buttons/TransparentButton";

const ExnessTeam = ({ headerText, paragraph, image }) => {
  const { pathname } = useLocation();
  const isDepositPage = pathname === "/deposits-and-withdrawals";
  const isCryptoPage = pathname === "/crypto-cfd";
  const isStocksPage = pathname === "/stocks-cfd";
  const isForexPage = pathname === "/forex-cfd";

  const h2Class =
    isCryptoPage || isStocksPage || isDepositPage || isForexPage
      ? "text-3xl text-center md:text-6xl  md:text-left font-bold mb-4 text-white tracking-wider whitespace-pre-line"
      : "text-2xl md:text-5xl font-bold mb-4 text-white tracking-wider";

  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className="relative w-full flex min-h-auto bg-cover bg-center px-6 py-8 md:px-12 lg:px-[84px]"
    >
      <div className="relative flex flex-col justify-between items-center min-h-[calc(141.176vw)] md:min-h-[500px] md:items-start sm:h-full md:justify-center w-full">
        <div className="w-full lg:w-[656px]">
          <div>
            <h2 className={h2Class}>{headerText}</h2>
          </div>

          <p className="text-base md:text-lg mb-4 text-white">{paragraph}</p>
        </div>
        {isDepositPage && (
          <div className="flex flex-col md:flex-row gap-2.5">
            <RegisterButton text={"Register"} />
            <SignInButton text={"Try Free Demo"} />
          </div>
        )}
        {isCryptoPage && (
          <div className="flex flex-col md:flex-row gap-2.5">
            <RegisterButton text={"Register"} />
            <SignInButton text={"Try Free Demo"} />
          </div>
        )}
        {isStocksPage && (
          <div className="flex flex-col md:flex-row gap-2.5">
            <RegisterButton text={"Register"} />
            <TransparentButton text={"Try Free Demo"} />
          </div>
        )}
        {isForexPage && (
          <div className="flex flex-col md:flex-row gap-2.5">
            <RegisterButton text={"Register"} />
            <TransparentButton text={"Try Free Demo"} />
          </div>
        )}

        {!isDepositPage && !isCryptoPage && !isStocksPage && !isForexPage && (
          <div>
            <RegisterButton text={"Meet the team"} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ExnessTeam;
