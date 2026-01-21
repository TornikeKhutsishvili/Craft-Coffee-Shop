import Sidebar from "../components/Sidebar";
import IngredientHeader from "../components/IngredientHeader";
import IngredientTable from "../components/IngredientTable";
import IngredientForm from "../components/IngredientForm";
import styles from "../styles/addIngredients.module.css";

const AddIngredients = () => {
  return (
    <>
      <Sidebar />
      <div className={styles.mainContent}>
        <IngredientHeader />
      </div>
      <div className={styles.tableContainer}>
        <IngredientTable />
      </div>
      <div className={styles.formContainer} id="ingredient-form">
        <h2 id="form-title">Add New Ingredient</h2>
        <IngredientForm />
      </div>
    </>
  );
};

export default AddIngredients;
