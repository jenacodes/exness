import {
  DashboardHeader,
  DashboardSidebar,
  DashboardBodyHeader,
  DashboardBody,
} from "../components";

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <DashboardSidebar />
      <DashboardBodyHeader />
      <DashboardBody />
    </div>
  );
};

export default Dashboard;
