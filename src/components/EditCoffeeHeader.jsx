import { useNavigate } from "react-router-dom";
import button from "../styles/button.module.css";

const EditCoffeeHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <h1>Edit Coffee</h1>
        <button
          className={`${button.btn} ${button.btnSecondary}`}
          onClick={() => navigate("/")}
        >
          Back to Dashboard
        </button>
      </header>
    </>
  );
};

export default EditCoffeeHeader;
