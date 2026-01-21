import Sidebar from "../components/Sidebar";
import IngredientHeader from "../components/IngredientHeader";
import IngredientTable from "../components/IngredientTable";
import IngredientForm from "../components/IngredientForm";

const AddIngredients = () => {
  return (
    <>
      <Sidebar />
      <div class="main-content">
        <IngredientHeader />
      </div>
      <div className="table-container">
        <IngredientTable />
      </div>
      <div class="form-container" id="ingredient-form">
        <h2 id="form-title">Add New Ingredient</h2>
        <IngredientForm />
      </div>
    </>
  );
};

export default AddIngredients;
