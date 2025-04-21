import { useState } from "react";
import {
  DashboardHeader,
  DashboardSidebar,
  DashboardBodyHeader,
  // DashboardContent,
  // MyAccountsSection,
} from "../components";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [selected, setSelected] = useState("My account");
  return (
    <div>
      <DashboardHeader selected={selected} onSelect={setSelected} />
      <DashboardSidebar selected={selected} onSelect={setSelected} />
      <DashboardBodyHeader />
      <Outlet />
    </div>
  );
};

export default Dashboard;
