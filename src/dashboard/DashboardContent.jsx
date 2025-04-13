import { useState } from "react";
import DepositsSection from "./DepositsSection";
import MyAccountsSection from "./MyAccountsSection";
import WithdrawalSection from "./WithdrawalSection";

// eslint-disable-next-line react/prop-types
const DashboardContent = ({ selected }) => {
  const [selectedAccountType, setSelectedAccountType] = useState("Real");
  let content;

  switch (selected) {
    case "Deposit":
      content = <DepositsSection />;
      break;
    case "My account":
      content = (
        <MyAccountsSection
          selectedAccountType={selectedAccountType}
          onAccountTypeChange={setSelectedAccountType}
        />
      );
      break;
    case "Withdrawal":
      content = <WithdrawalSection />;
      break;
    case "":
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
