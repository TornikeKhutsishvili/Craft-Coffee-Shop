import { useNavigate } from "react-router-dom";
import button from "../styles/button.module.css";

const CoffeeHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <h1>Add New Coffee</h1>
        <button
          className={`${button.btn} ${button.btnPrimary}`}
          onClick={() => navigate("/")}
        >
          Back to Dashboard
        </button>
      </header>
    </>
  );
};

export default CoffeeHeader;
