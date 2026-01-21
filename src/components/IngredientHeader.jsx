import { Navigate } from "react-router-dom";

const IngredientHeader = () => {
  return (
    <>
      <header className="header">
        <h1>Manage Ingredients</h1>
        <button
          className="btn btn-secondary"
          onClick={() => Navigate("/add-coffee")}
        >
          Add New Coffee
        </button>
      </header>
    </>
  );
};

export default IngredientHeader;
