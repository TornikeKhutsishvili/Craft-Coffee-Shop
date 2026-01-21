import { useNavigate } from "react-router-dom";
import button from "../styles/button.module.css";

const IngredientHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <h1>Manage Ingredients</h1>
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

export default IngredientHeader;
