import DashboardBody from "./DashboardBody";
import DepositsSection from "./DepositsSection";
import WithdrawalSection from "./WithdrawalSection";

// eslint-disable-next-line react/prop-types
const DashboardContent = ({ selected }) => {
  let content;

  switch (selected) {
    case "Deposit":
      content = <DepositsSection />;
      break;
    case "My account":
      content = <DashboardBody />;
      break;
    case "Withdrawal":
      content = <WithdrawalSection />;
      break;
    case "Setting":
      content = (
        <div>
          <h1>Setting</h1>
          <p>This is where you change settings.</p>
        </div>
      );
      break;
    // Add additional cases for other menu items...
    default:
      content = (
        <div>
          <h1>Dashboard</h1>
          <p>This is your dashboard.</p>
        </div>
      );
  }

  return <div className="p-4">{content}</div>;
};

export default DashboardContent;
