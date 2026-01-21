import Table from "../components/Table";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="table-container">
          <Table />
        </div>
        <div>
          <h2>Coffee Cards</h2>
          <div class="coffee-cards" id="coffee-cards"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
