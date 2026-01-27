import { useNavigate } from "react-router-dom";
import button from "../styles/button.module.css";

const DashboardHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <h1>Coffee Dashboard</h1>
        <button
          className={`${button.btn} ${button.btnPrimary}`}
          onClick={() => navigate("/add-coffee")}
        >
          Add New Coffee
        </button>
      </header>
    </>
  );
};

export default DashboardHeader;
