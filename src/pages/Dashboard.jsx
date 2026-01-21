import DashboardTable from "../components/DashboardTable";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import styles from "../styles/dashboard.module.css";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className={styles.mainContent}>
        <DashboardHeader />
        <div className={styles.tableContainer}>
          <DashboardTable />
        </div>
        <div>
          <h2>Coffee Cards</h2>
          <div className={styles.coffeeCards} id="coffee-cards"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
