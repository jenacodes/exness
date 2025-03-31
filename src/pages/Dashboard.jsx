import { useState } from "react";

import {
  DashboardHeader,
  DashboardSidebar,
  DashboardBodyHeader,
  DashboardContent,
} from "../components";

const Dashboard = () => {
  const [selected, setSelected] = useState("My account");
  return (
    <div>
      <DashboardHeader />
      <DashboardSidebar selected={selected} onSelect={setSelected} />
      <DashboardBodyHeader />
      <DashboardContent selected={selected} />
      {/* <DashboardBody /> */}
    </div>
  );
};

export default Dashboard;
