import Table from "../components/Table";

const Dashboard = () => {
  return (
    <>
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
