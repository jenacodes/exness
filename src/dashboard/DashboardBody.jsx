import { useState } from "react";
import MyAccountsSection from "../dashboard/MyAccountsSection";
import Slider from "../dashboard/Slider";

const DashboardBody = () => {
  // Maintain state in the parent component
  const [selectedAccountType, setSelectedAccountType] = useState("Real");
  return (
    <>
      <Slider />
      <MyAccountsSection
        selectedAccountType={selectedAccountType}
        onAccountTypeChange={setSelectedAccountType}
      />
    </>
  );
};

export default DashboardBody;
