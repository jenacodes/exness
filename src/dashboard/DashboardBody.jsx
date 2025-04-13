import { useState } from "react";
import MyAccountsSection from "../dashboard/MyAccountsSection";

const DashboardBody = () => {
  // Maintain state in the parent component
  const [selectedAccountType, setSelectedAccountType] = useState("Real");
  return (
    <>
      <MyAccountsSection
        selectedAccountType={selectedAccountType}
        onAccountTypeChange={setSelectedAccountType}
      />
    </>
  );
};

export default DashboardBody;
