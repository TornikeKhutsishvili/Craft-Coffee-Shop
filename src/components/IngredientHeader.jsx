import { Navigate } from "react-router-dom";

const IngredientHeader = () => {
  return (
    <>
      <header className="header">
        <h1>Manage Ingredients</h1>
        <button className="btn btn-secondary" onClick={() => Navigate("/")}>
          Back to Dashboard
        </button>
      </header>
    </>
  );
};

export default IngredientHeader;
