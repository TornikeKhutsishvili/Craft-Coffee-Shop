import { useNavigate } from "react-router-dom";
import button from "../styles/button.module.css";

const CoffeeDetailHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <h1>Coffee Details</h1>
        <button
          className={`${button.btn} ${button.btnSecondary}`}
          onClick={() => navigate("/")}
        >
          Back to Dashboard
        </button>
      </div>
    </>
  );
};

export default CoffeeDetailHeader;
