import { useState } from "react";

import {
  DashboardHeader,
  DashboardSidebar,
  DashboardBodyHeader,
  DashboardContent,
} from "../components";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [selected, setSelected] = useState("My account");
  return (
    <div>
      <DashboardHeader />
      <DashboardSidebar selected={selected} onSelect={setSelected} />
      <DashboardBodyHeader />
      <DashboardContent selected={selected} />
      <Outlet />
    </div>
  );
};

export default Dashboard;
