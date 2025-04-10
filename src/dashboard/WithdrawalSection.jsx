import DashboardFooter from "./DashboardFooter";

const WithdrawalSection = () => {
  return (
    <div className="lg:pl-28 flex flex-col ">
      <div className="">
        <h1 className="text-4xl font-semibold">Withdrawal</h1>
      </div>
      <div className="my-6 flex flex-col gap-4">
        <h3 className="text-2xl font-semibold tracking-wide leading-7">
          All payment methods
        </h3>
        <div className="grid gap-y-4 mb-10 grid-cols-[repeat(auto-fill,minmax(480px,1fr))] gap-6"></div>
        <DashboardFooter />
      </div>
    </div>
  );
};

export default WithdrawalSection;
