import PaymentMethodCard from "./PaymentMethodCard";
import DashboardFooter from "./DashboardFooter";

const DepositsSection = () => {
  const cards = [
    {
      imgSrc: "https://pp.ekspp.com/cdn/pm-icons/online-transfer/48/False.svg",
      title: "Online Bank Transfer",
      verification: "Unavailable",
      details: {
        processingTime: "1-2 business days",
        fee: "0%",
        limits: "50 - 20000",
      },
    },
    {
      imgSrc: "https://pp.ekspp.com/cdn/pm-icons/card/48/False.svg",
      title: "Bank Card",
      verification: "Unavailable",
      details: {
        processingTime: "1-2 business days",
        fee: "0%",
        limits: "50 - 20000",
      },
    },
    {
      imgSrc: "https://pp.ekspp.com/cdn/pm-icons/bitcoin/48/False.svg",
      title: "Bitcoin (BTC)",
      verification: "Unavailable",
      details: {
        processingTime: "1-2 business days",
        fee: "0%",
        limits: "50 - 20000",
      },
    },
    {
      imgSrc: "https://pp.ekspp.com/cdn/pm-icons/neteller/48/False.svg",
      title: "Neteller",
      verification: "Unavailable",
      details: {
        processingTime: "1-2 business days",
        fee: "0%",
        limits: "50 - 20000",
      },
    },
    {
      imgSrc: "https://pp.ekspp.com/cdn/pm-icons/online-transfer/48/False.svg",
      title: "Pay with Bank",
      verification: "Unavailable",
      details: {
        processingTime: "1-2 business days",
        fee: "0%",
        limits: "50 - 20000",
      },
    },
    {
      imgSrc: "https://pp.ekspp.com/cdn/pm-icons/offline-bank-1/48/False.svg",
      title: "Online Bank Transfer",
      verification: "Unavailable",
      details: {
        processingTime: "1-2 business days",
        fee: "0%",
        limits: "50 - 20000",
      },
    },
    // Add more cards as needed...
  ];

  return (
    <div className="lg:pl-28 flex flex-col mt-10 px-4 ">
      <div className="">
        <h1 className="text-3xl font-bold">Deposit</h1>
      </div>
      <div className="my-6 flex flex-col gap-4">
        <h3 className="text-xl font-semibold tracking-wide leading-7">
          Verification required
        </h3>
        <div className="grid gap-y-4 mb-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <PaymentMethodCard
              key={index}
              imgSrc={card.imgSrc}
              title={card.title}
              verification={card.verification}
              details={card.details}
            />
          ))}
        </div>
        <DashboardFooter />
      </div>
    </div>
  );
};

export default DepositsSection;
