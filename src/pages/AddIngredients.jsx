import IngredientHeader from "../components/IngredientHeader";
import IngredientTable from "../components/IngredientTable";
import IngredientForm from "../components/IngredientForm";
import styles from "../styles/addIngredients.module.css";
import { useAdminContext } from "../contexts/AdminContext";

const AddIngredients = () => {
  const { editingIngredient } = useAdminContext();

  return (
    <>
      <div className={styles.mainContent}>
        <IngredientHeader />
        <div className={styles.tableContainer}>
          <IngredientTable />
        </div>
        <div className={styles.formContainer} id="ingredient-form">
          <h2 id="form-title">
            {editingIngredient ? "Edit Ingredient" : "Add New Ingredient"}
          </h2>
          <IngredientForm />
        </div>
      </div>
    </>
  );
};

export default AddIngredients;
