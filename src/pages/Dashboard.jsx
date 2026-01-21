import DashboardTable from "../components/DashboardTable";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <DashboardHeader />
        <div className="table-container">
          <DashboardTable />
        </div>
        <div>
          <h2>Coffee Cards</h2>
          <div className="coffee-cards" id="coffee-cards"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
