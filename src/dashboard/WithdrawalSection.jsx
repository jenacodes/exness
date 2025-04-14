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
      verification: "Unavailable",
      details: {
        processingTime: "Instant - 1 day",
        fee: "0%",
        limits: "50 - 20000",
      },
    },

    // Add more cards as needed...
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
        <div className="grid gap-y-4 mb-10 grid-cols-[repeat(auto-fill,minmax(480px,1fr))] gap-6">
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
        <DashboardFooter />
      </div>
    </div>
  );
};

export default WithdrawalSection;
