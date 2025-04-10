import { MdOutlineComputer } from "react-icons/md";
import { IoCardOutline } from "react-icons/io5";
import { LiaBitcoin } from "react-icons/lia";
import { TbCircleLetterN } from "react-icons/tb";
import { BsBank } from "react-icons/bs";
import PaymentMethodCard from "./PaymentMethodCard"; // Adjust the path as needed
import DashboardFooter from "./DashboardFooter"; // Adjust the path as needed

const DepositsSection = () => {
  const cards = [
    {
      icon: <MdOutlineComputer size={20} color="white" />,
      title: "Online Bank Transfer",
      verification: "Unavailiable",
    },
    {
      icon: <IoCardOutline size={20} color="white" />,
      title: "Bank Card",
      verification: "Unavailable",
    },
    {
      icon: <LiaBitcoin size={20} color="white" />,
      title: "Bitcoin (BTC)",
      verification: "Unavailable",
    },
    {
      icon: <TbCircleLetterN size={20} color="white" />,
      title: "Neteller",
      verification: "Unavailable",
    },
    {
      icon: <BsBank size={20} color="white" />,
      title: "Pay with Bank",
      verification: "Unavailable",
    },
    {
      icon: <MdOutlineComputer size={20} color="white" />,
      title: "Online Bank Transfer",
      verification: "Unavailable",
    },
    // Add more cards as needed...
  ];

  const details = [
    "Processing time instant - 45 minutes",
    "Fee 0%",
    "Limits 12 - 10000",
  ];

  return (
    <div className="lg:pl-28 flex flex-col ">
      <div className="">
        <h1 className="text-3xl font-bold">Deposit</h1>
      </div>
      <div className="my-6 flex flex-col gap-4">
        <h3 className="text-2xl font-semibold tracking-wide">Unavailable</h3>
        <div className="grid gap-y-4 mb-10 grid-cols-[repeat(auto-fill,minmax(480px,1fr))] gap-6">
          {cards.map((card, index) => (
            <PaymentMethodCard
              key={index}
              icon={card.icon}
              title={card.title}
              verification={card.verification}
              details={details}
            />
          ))}
        </div>
        <DashboardFooter />
      </div>
    </div>
  );
};

export default DepositsSection;
