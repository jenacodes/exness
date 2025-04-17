import DashboardFooter from "./DashboardFooter";
import PaymentMethodCard from "./PaymentMethodCard";

const WithdrawalSection = () => {
  const cards = [
    {
      imgSrc: "https://pp.ekspp.com/cdn/pm-icons/online-transfer/48/True.svg",
      title: "Online Bank Transfer",
      verification: "Recommended",
      details: {
        processingTime: "1-2 business days",
        fee: "0%",
        limits: "50 - 20000",
      },
    },
    {
      imgSrc: "https://pp.ekspp.com/cdn/pm-icons/neteller/48/True.svg",
      title: "Neteller",
      details: {
        processingTime: "1-2 business days",
        fee: "0%",
        limits: "50 - 20000",
      },
    },
    {
      imgSrc: "https://pp.ekspp.com/cdn/pm-icons/skrill/48/True.svg",
      title: "Skrill",

      details: {
        processingTime: "1-2 business days",
        fee: "0%",
        limits: "50 - 20000",
      },
    },
    {
      imgSrc: "https://pp.ekspp.com/cdn/pm-icons/sticpay/48/True.svg",
      title: "Sticpay",
      details: {
        processingTime: "Instant - 1 day",
        fee: "0%",
        limits: "50 - 20000",
      },
    },

    // Add more cards as needed...
  ];

  const TransferCard = [
    {
      imgSrc:
        "https://pp.ekspp.com/cdn/pm-icons/custom-transfer-in-circle/48/False.svg",
      title: "Between Your Accounts",
      verification: "Unavailable",
      details: {
        processingTime: "Instant - 1 day",
        fee: "0%",
        limits: "1 - 1000000",
      },
    },
  ];

  const VerificationCard = [
    {
      imgSrc: "https://pp.ekspp.com/cdn/pm-icons/usdt-trc20/48/False.svg",
      title: "Tether (USDT TRC 20)",
      verification: "Unavailable",
      details: {
        processingTime: "Instant - 15 minutes",
        fee: "0%",
        limits: "1 - 1000000 USD",
      },
    },
    {
      imgSrc: "https://pp.ekspp.com/cdn/pm-icons/bitcoin/48/False.svg",
      title: "Bitcoin (BTC)",
      verification: "Unavailable",
      details: {
        processingTime: "Instant - 1 hour",
        fee: "0%",
        limits: "200 - 1,000,000 USD",
      },
    },
    {
      imgSrc: "https://pp.ekspp.com/cdn/pm-icons/usdt-trc20/48/False.svg",
      title: "Tether (USDT ERC 20)",
      verification: "Unavailable",
      details: {
        processingTime: "Instant - 15 minutes",
        fee: "0%",
        limits: "1 - 1,000,000 USD",
      },
    },
    {
      imgSrc: "https://pp.ekspp.com/cdn/pm-icons/usdc-erc20/48/False.svg",
      title: "USD Coin (USDC ERC 20)",
      verification: "Unavailable",
      details: {
        processingTime: "Instant - 15 minutes",
        fee: "0%",
        limits: "1 - 1,000,000 USD",
      },
    },
  ];

  return (
    <div className="lg:pl-28 flex flex-col mt-10 px-4 ">
      <div className="">
        <h1 className="text-4xl font-semibold">Withdrawal</h1>
      </div>
      <div className="my-6 flex flex-col gap-4">
        <h3 className="text-2xl font-semibold tracking-wide leading-7">
          All payment methods
        </h3>
        <div className="grid gap-y-4 mb-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <PaymentMethodCard
              key={index}
              imgSrc={card.imgSrc}
              title={card.title}
              verification={card.verification}
              details={card.details}
              type={"withdrawal"}
            />
          ))}
        </div>

        <div className="my-6 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold tracking-wide leading-7">
            Transfer
          </h3>
          <div className="grid gap-y-4 mb-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
            {TransferCard.map((card, index) => (
              <PaymentMethodCard
                key={index}
                imgSrc={card.imgSrc}
                title={card.title}
                verification={card.verification}
                details={card.details}
              />
            ))}
          </div>
        </div>

        <div className="my-6 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold tracking-wide leading-7">
            Verification required
          </h3>
          <div className="grid gap-y-4 mb-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
            {VerificationCard.map((card, index) => (
              <PaymentMethodCard
                key={index}
                imgSrc={card.imgSrc}
                title={card.title}
                verification={card.verification}
                details={card.details}
              />
            ))}
          </div>
        </div>

        <DashboardFooter />
      </div>
    </div>
  );
};

export default WithdrawalSection;
